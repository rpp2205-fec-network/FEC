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
      currentItem: this.props.product_id
    }
  }


  render() {
    return(
      <div>
        <ListErrorBoundary>
          <div style={{fontSize: '25px', fontWeight: 'bold'}}>Similar Products</div>
          <Recommend currentItem={this.state.currentItem} changeProduct={this.props.changeProduct} />
          <div style={{fontSize: '25px', fontWeight: 'bold'}}> Your Outfit</div>
          <Outfit currentItem={this.state.currentItem}/>
        </ListErrorBoundary>
      </div>
    )
  }
}

