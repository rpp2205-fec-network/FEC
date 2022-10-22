import React from 'react';

// Outfit only reads current outfit state from main List component

export default class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // element loops through the outfit list and displays each item
  // this will be expanded upon as the incoming data is updated
  element() {
    let outfitMap = this.props.outfitLists.map((item, index) => {
      return (
        <div key={index} id='outfit'>
            {/* <button onClick={this.props.removeOutfits}></button> */}
            <div>{item.category},{item.price}</div>
          </div>
      )
    })

    return (
      <div id='outfitScroll'>{outfitMap}</div>
    )
  }


  render() {
    return (
      <div>
        {this.element()}
      </div>
    )
  }
}