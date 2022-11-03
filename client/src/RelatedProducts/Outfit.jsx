import React, { useState } from 'react';
import axios from 'axios';
import Ratings from 'react-ratings-declarative';


// Outfit only reads current outfit state from main List component

export default class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitList : [],
      example: null,
      currentPosition: 0,
      storageCount: Object.keys(localStorage).length,
      displayCount: 5,
      display: {}
    }
  }

  // element loops through the outfit list and displays each item
  // this will be expanded upon as the incoming data is updated
  element() {
    if (this.state.storageCount > 0) {
      var values = [],
      keys = Object.keys(this.state.display),
      i = keys.length;
      while ( i-- ) {
        values.push( this.state.display[keys[i]] );
      }
      let outfitMap = values.map((item, index) => {
        return (
          <div key={index} id='productRec' >
            <button onClick={this.removeItem.bind(this)} style={{position: 'absolute'}} value={item.id}>-</button>
            <div id='productRecInfo'>
              <img id='productRecInfoImage' src={item.image}></img>
              <div id='productRecInfoCategory'>{item.category}</div>
              <div id='productRecInfoName'>{item.name}</div>
              <div id='productRecInfoPrice'>${item.default_price}</div>
              <Ratings
                rating={item.rating}
                widgetRatedColors="black"
                widgetDimensions="15px"
                widgetSpacings="1px"
              >
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
              </Ratings>

            </div>
          </div>
        )
      })
      return (
        <div >{outfitMap}</div>
      )
    }
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


  addItem () {
    let curr = {};
    let hook = this;
    axios.get('/productOverview/' + this.props.currentItem)
    .then((response) => {
      curr.category = response.data.category;
      curr.name = response.data.name;
      curr.default_price = response.data.default_price;
      curr.id = this.props.currentItem

      axios.get('/productOverview/styles/' + this.props.currentItem)
      .then((response) => {
        curr.image = response.data.results[0].photos[0].thumbnail_url
        axios.get('/relatedPrdouctsReviews/' + this.props.currentItem)
        .then((response) => {
          let arrayOfRatings = []
          for (var i = 0; i < response.data.results.length; i++) {
            arrayOfRatings.push(response.data.results[i].rating)
          }
          const average = arrayOfRatings => arrayOfRatings.reduce((a,b) => a + b) / arrayOfRatings.length
          var avg = average(arrayOfRatings)
          curr.rating = avg;
          localStorage.setItem(this.props.currentItem, JSON.stringify(curr));
          let newDisplay = hook.state.display;
          newDisplay[curr.id] = curr;
          hook.setState({
            display: newDisplay
          })
        })
      })
    })
    .catch((err) => {
        throw err
    })
  }

  removeItem(e) {
    let removed = this.state.display;
    delete removed[e.target.value];
    this.setState({
      display: removed
    })
    localStorage.removeItem(JSON.parse(e.target.value));
  }

  // test() {
  //   localStorage.clear()
  // }
  componentDidMount() {
    var values = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values[keys] = JSON.parse(localStorage.getItem(keys[i]));
    }

    this.setState({
      display: values
    })
  }



  render() {
    return (
      <div id='outfitScroll'>
        {this.state.currentPosition === 0 ? null: <button id='leftArrow' onClick={this.leftArrow.bind(this)}>&lt;</button>}
        {this.element()}
        {this.state.currentPosition + this.state.displayCount >= this.state.outfitList.length ? null: <button id='rightArrow' onClick={this.rightArrow.bind(this)}>&gt;</button>}
        {/* <input type='button' value={this.props.currentItem.id} onClick={this.addItem.bind(this)}>+</input> */}
        <button onClick={this.addItem.bind(this)} style={{fontSize: '75px', backgroundColor: 'Transparent', backgroundRepeat:'no-repeat', border: 'none'    }}> +</button>
        {/* <button onClick={this.test}>Test</button> */}
      </div>
    )
  }
}