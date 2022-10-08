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
      url: '/testKen',
      params: {
        id: this.state.hardcode
      }
    }).then((response) => {
      console.log(response)
      this.setState({
        productList: response.data
      })
    })
  }

  // render items in state and display each as a div
  element() {
    if (this.state.productList.length > 0) {
      let recMap = this.state.productList.map((item, index) => {
        return (
          <div key={index} id='productRec'>
            <div id='productRecInfo'>{item.category},{item.price}</div>
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