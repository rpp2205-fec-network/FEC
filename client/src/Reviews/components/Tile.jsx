import React from 'react';
// import '../../../dist/styles.css';

const Tile = (props) => {
  console.log('TILE PROP TEST', props.review)
    return (
    <div className="tile">
        Rating: {props.review.rating} <br/>
        Title: {props.review.summary} <br/>
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
