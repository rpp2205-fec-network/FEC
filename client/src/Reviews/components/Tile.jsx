import React from 'react';
import Ratings from 'react-ratings-declarative';
import { format } from 'date-fns'

const Tile = (props) => {
  //console.log('TILE PROP TEST', props.review)
    return (
    <div className="tile">
      <Ratings
        rating={props.review.rating}
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
      <div className='userAndDate'>
        {props.review.reviewer_name},
        {/* {format(props.review.date, 'MMMM do Y')} */}
        {props.review.date}
      </div>
      <br/>
        <b>{props.review.summary}</b><br/>
        {props.review.body} <br/>
    </div>
    )
  }
export default Tile;

// export default class Tile extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {}
// }

// render() {
//   return (
//     <div>
//     </div>
//   )
// }
// }
