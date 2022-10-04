import React from 'react';
import Recommend from './Recommend.jsx';
import Outfit from './Outfit.jsx';

// using example product data for rendering before state for currentItem

export default class Lists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: {
        category: 'shoes',
        images: 'needs image url in state',
        description: 'red shoes with the steve madden heel',
        price: 250,
        size: 10
      },
      recList: [],
      outfitList: [{
        category: 'socks',
        images: 'socksOne',
        description: 'socksTwo',
        price: 10,
        size: 10
      }, {
        category: 'pants',
        images: 'needs image url in state',
        description: 'red shoes with the steve madden heel',
        price: 250,
        size: 10
      }, {
        category: 'shirt',
        images: 'needs image url in state',
        description: 'red shoes with the steve madden heel',
        price: 250,
        size: 10
      }, {
        category: 'underwear',
        images: 'needs image url in state',
        description: 'red shoes with the steve madden heel',
        price: 250,
        size: 10
      }]
    }
  }

  // remove the target input from outfitList array when use clicks the minus button in the outfit list
  removeOutfit(input) {
    let arr = this.state.outfitList;
    let removeIndex = arr.indexOf(input);
    arr = arr.splice(removeIndex, 1)
    this.setState({
      outfitList: arr
    })
  }





  render() {
    return(
      <div>
        <div>
          Similar Products
          <Recommend recLists={this.state.currentItem}/>
        </div>
        <div>
          Your Outfit
          <Outfit outfitLists={this.state.outfitList} removeOutfits={this.removeOutfit.bind(this)}/>
        </div>
      </div>
    )
  }
}

