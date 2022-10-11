import React from 'react';
import axios from 'axios';

export default class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      productIdList: [],
      hardcode: 71701
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
      console.log(response)
      this.setState({
        productList: response.data
      })
      console.log(this.state.productList)
    })
  }

  // render items in state and display each as a div
  element() {
    if (this.state.productList.length > 0) {
      return this.state.productList.map((item, index) => {
        // console.log(item)
        return (
          <div key={index} id='productRec'>
            <div id='productRecInfo'>
              <div id='productRecInfoImage'></div>
              <div id='productRecInfoCategory'>{item.category}</div>
              <div id='productRecInfoName'>{item.name}</div>
              <div id='productRecInfoPrice'>{item.price}</div>
              <div id='productRecInfoStar'>STAR IMAGE THINGY</div>
            </div>
          </div>
        )
      })

      return (
        <div id='productRecScroll'>{recMap}</div>
      )
    }
  }

  // run async pull request to populate current state of products
  componentDidMount() {
    this.pull();
  }


  render() {
    return (
      <div>
        {this.element()}
      </div>
    )
  }
}