import React from 'react';
import axios from 'axios';

export default class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    }
  }

  // pull all related products from server with this category and return an array of mapped items
  pull() {
    axios({
      method: 'get',
      url: '/getCategories'
    }).then((response) => {
      this.setState({
        productList: response.data
      })
    })
  }

  // render items in state and display each as a div
  element() {
    if (this.state.productList.length > 0) {
      return this.state.productList.map((item, index) => {
        // console.log(item)
        return (
          <div key={index}>
            {item.category}
            {item.price}
          </div>
        )
      })
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