import React from 'react';

// Outfit only reads current outfit state from main List component

export default class Outfit extends React.Component {

  // element loops through the outfit list and displays each item
  // this will be expanded upon as the incoming data is updated
  element() {
    let outfitMap = this.props.outfitLists.map((item, index) => {
      return (
        <div key={index}>
            {/* <button onClick={this.props.removeOutfits}></button> */}
            <div>{item.category},{item.price}</div>
          </div>
      )
    })

    return (
      <div>{outfitMap}</div>
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