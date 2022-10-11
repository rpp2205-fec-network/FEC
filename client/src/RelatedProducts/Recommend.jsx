import React from 'react';
import axios from 'axios';
import Hover from './onHover.jsx'

export default class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      productIdList: [],
      hardcode: 71701,
      display: [],
      displayCount: 2,
      currentPosition: 0
    }
  }

  // pull all related products from server with this category and return an array of mapped items
  pull() {
    axios({
      method: 'get',
      url: '/relatedProducts',
      params: {
        id: this.state.hardcode
      }
    }).then((response) => {
      let setDisplay = [response.data[0], response.data[1]]

      this.setState({
        productList: response.data,
        display: setDisplay
      })
      console.log(this.state.productList)
    })
  }

  // render items in state and display each as a div
  element(input) {
    let recMap = input.map((item, index) => {
      return (
        <div key={index} id='productRec' >
          <div id='productRecInfo'>
            <div id='productRecInfoImage' onMouseMove={Hover} value={this.state.hovers}>IMAGE HERE</div>
            <div id='productRecInfoCategory'>{item.category}</div>
            <div id='productRecInfoName'>{item.name}</div>
            <div id='productRecInfoPrice'>${item.default_price}</div>
            <div id='productRecInfoStar'>STAR IMAGE THINGY</div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <div>{recMap}</div>
      </div>

    )
  }

  //right arrow function
  rightArrow() {
    let current = this.state.currentPosition + 1;
    let arr = this.state.display;
    arr.shift();
    //console.log(current)
    arr.push(this.state.productList[this.state.displayCount - 1 + current])
    //console.log(arr)
    this.setState({
      display: arr,
      currentPosition: current
    })
  }

  //left arrow function
  leftArrow() {
    let current = this.state.currentPosition - 1;
    let arr = this.state.display;
    arr.pop();
    console.log(current)
    arr.unshift(this.state.productList[current])
    console.log(arr)
    this.setState({
      display: arr,
      currentPosition: current
    })
  }



  // run async pull request to populate current state of products
  componentDidMount() {
    this.pull();
  }


  render() {
    return (
      <div id='productRecScroll'>
        {this.state.currentPosition === 0 ? null: <button id='leftArrow' onClick={this.leftArrow.bind(this)}>&lt;</button>}
        {this.element(this.state.display)}
        {this.state.currentPosition + this.state.displayCount >= this.state.productList.length ? null: <button id='rightArrow' onClick={this.rightArrow.bind(this)}>&gt;</button>}
      </div>
    )
  }
}