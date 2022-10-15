import React, {useState} from 'react';
import axios from 'axios';

export default class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      productIdList: [],
      example: {id: 71702,
        campus: 'hr-rpp',
        name: 'Pumped Up Kicks',
        slogan: 'Faster than a just about anything',
        description: 'The Pumped Up serves up crisp court style with a m…upple leather upper and a classic rubber cupsole.',
        features: [{feature: 'Sole', value: 'test'}, {feature: 'Material', value: 'FullControlSkin'}, {feature: 'Mid-Sole', value: 'ControlSupport Arch Bridge'}, {feature: 'Stitching', value: 'Double Stitch'}],
        image: "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        name: "Pumped Up Kicks",
        slogan: "Faster than a just about anything",
        updated_at: "2022-05-11T19:38:15.373Z"
      },
      display: [],
      displayCount: 2,
      currentPosition: 0,
      clikedProduct: null,
      popup: false
    }
  }

  // pull all related products from server with this category and return an array of mapped items
  pull() {
    axios({
      method: 'get',
      url: '/relatedProducts',
      params: {
        id: this.state.example.id
      }
    }).then((response) => {
      //console.log(response.data)
      let setDisplay = [response.data[0], response.data[1]]
      this.setState({
        productList: response.data,
        display: setDisplay
      })
    }).then(() => {
      this.state.productList.forEach((item) => {
        axios.get('/productOverview/styles/' + item.id)
        .then((response) => {
          item.image = response.data.results[0].photos[0].thumbnail_url
        })
        axios.get('/relatedPrdouctsReviews/' + item.id)
        .then((response) => {
          let arrayOfRatings = []
          for (var i = 0; i < response.data.results.length; i++) {
            arrayOfRatings.push(response.data.results[i].rating)
          }
          const average = arrayOfRatings => arrayOfRatings.reduce((a,b) => a + b) / arrayOfRatings.length
          var avg = average(arrayOfRatings)
          item.rating = avg;
        })
      })
    })
  }

  // render items in state and display each as a div
  element(input) {
    let recMap = input.map((item, index) => {
      return (
        <div key={index} id='productRec'>
          <div id='productRecInfo'>
            {/* setting up toggle for popup on image click of the related products image */}
            <img id='productRecInfoImage' src={item.image} onClick={() => {
              this.setState({
                popup: !this.state.popup,
                clickedProduct: item
              })
            }}></img>
            <div id='productRecInfoCategory'>{item.category}</div>
            <div id='productRecInfoName'>{item.name}</div>
            <div id='productRecInfoPrice'>${item.default_price}</div>
            <div id='productRecInfoStar'>STAR IMAGE THINGY</div>
            {() => {
              let x = 0;
              // for (var i = 0; i < item.rating; i++) {

              // }
            }}
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
    arr.unshift(this.state.productList[current])
    this.setState({
      display: arr,
      currentPosition: current
    })
  }


  // popup when an the state is changed from an image click
  popupFunc(e) {

    // function to return the specific line that includes a check mark, the feature name, and another check mark
    let key = 0; // counter for key reference in html
    let compareTd = function(option, feature) {
      if (option === 'option1') {
        // returning check to both sides
        key++;
        return (
          <tr key={key + 3}>
            <td key={key}>&#10004;</td>
            <td key={key + 1}>{feature.feature} : {feature.value}</td>
            <td key={key + 2}>&#10004;</td>
          </tr>
        )
      } else if (option === 'option2') {
        // returning check to left side only
        key++;
        return (
          <tr key={key + 3}>
            <td key={key}>&#10004;</td>
            <td key={key + 1}>{feature.feature} : {feature.value}</td>
            <td key={key + 2}></td>
          </tr>
        )
      } else if (option === 'option3') {
        // returning check to right side only
        key++;
        return (
          <tr key={key + 3}>
            <td key={key}></td>
            <td key={key + 1}>{feature.feature} : {feature.value}</td>
            <td key={key + 2}>&#10004;</td>
          </tr>
        )
      }
    }

    // function to map through list of features and create the table with appropriate check marks if shared features
    // Im so sorry Zach... this is ugly af O(n^n) it feels like
    // the good new is it worked basically the first time I ran it :D
    var mapFeatures = function() {
      let beginning = []
      let beginningFullItem = [];
      let endLeft = [];
      let endRight = [];
      //console.log(e.example.features, e.clickedProduct.features)
      e.example.features.forEach((item) => {
        e.clickedProduct.features.forEach((item2) => {
          if (item.feature === item2.feature && item.value === item2.value) {
            beginning.push(item.value)
            beginningFullItem.push(item)
          }
        })
      })
      e.example.features.forEach((item) => {
        if (!beginning.includes(item.value)) {
          endLeft.push(item)
        }
      })
      e.clickedProduct.features.forEach((item) => {
        if (!beginning.includes(item.value)) {
          endRight.push(item)
        }
      })
      let arrayOfArrays = [beginningFullItem, endLeft, endRight];
      let count = 1;
      let result = [];
      for (var i = 0; i < arrayOfArrays.length; i++) {
        let option = 'option' + count.toString();
        count++;
        arrayOfArrays[i].map((item) => {

          return result.push(compareTd(option, item))
        })
      }
      //console.log(arrayOfArrays)
      return result;
    }



    return (
      <div id='compareBox'>
        Comparing
        <table>
          <tbody>
          <tr>
            <td id='compareName'>{this.state.example.name}</td>
            <td>    </td>
            <td id='compareName'>{this.state.clickedProduct.name}</td>
          </tr>
          {mapFeatures()}
          </tbody>
        </table>
      </div>
    )
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
        {this.state.popup ? this.popupFunc(this.state): null}
        {this.state.currentPosition + this.state.displayCount >= this.state.productList.length ? null: <button id='rightArrow' onClick={this.rightArrow.bind(this)}>&gt;</button>}
      </div>
    )
  }
}