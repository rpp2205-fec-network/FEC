import React from 'react';
import Tile from './Tile.jsx'

const List = (props) => {
  console.log('PROPSSSS', props)
    return (
    <div>
      <Tile props={props}/>
      List to be here<br/>
      <button>More Reviews</button>
      <button>Add A Review</button>
    </div>
    )
  }
export default List;