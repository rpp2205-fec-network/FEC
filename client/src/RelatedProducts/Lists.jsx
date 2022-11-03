import React from 'react';
import Recommend from './Recommend.jsx';
import Outfit from './Outfit.jsx';
import ListErrorBoundary from './ListsErrorBoundry.jsx'
import axios from 'axios';

// using example product data for rendering before state for currentItem
// Main List component holds both product recommendation list and outfit list

export default class Lists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: this.props.product_id,
      clickedItem: parseInt(window.location.hash.split('/')[2])
    }
    //console.log(this.props.product_id, 'inside lists')
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    // console.log('inside List componentDidUpdate prevProps', prevProps, this.props, this.state)
    if (this.props.product_id !== prevProps.product_id) {
      this.setState({
        currentItem: this.props.product_id
      })
    }
  }


  render() {
    return(
      <div onClick={(e) => this.props.clickTracking(e, 'RelatedProducts')}>
        <ListErrorBoundary>
          <div style={{fontSize: '25px', fontWeight: 'bold'}}>Similar Products</div>
          {/* <Recommend currentItem={this.state.clickedItem ? this.state.clickedItem: this.state.currentItem} changeProduct={this.props.changeProduct} /> */}
          <Recommend currentItem={this.state.currentItem} changeProduct={this.props.changeProduct} />
          <div style={{fontSize: '25px', fontWeight: 'bold'}}> Your Outfit</div>
          <Outfit currentItem={this.state.currentItem}/>
        </ListErrorBoundary>
      </div>
    )
  }
}

