import React from 'react';
import Ratings from 'react-ratings-declarative';
import { format } from 'date-fns'

class Tile extends React.Component {
  //console.log('TILE PROP TEST', props.review)
  constructor(props) {
    super(props);
    this.state = {
    }
    this.helpfulCounter = this.helpfulCounter.bind(this);
  }

  helpfulCounter = () => {
    this.props.review.helpfulness + 1
  }

  render() {
    return (
    <div className="tile">
      {/* ================= RATINGS ================= */}
      <Ratings
        rating={this.props.review.rating}
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

      {/* ================= USER & DATE ================= */}
      <div className='userAndDate'>
        {this.props.review.reviewer_name}, {format(new Date(this.props.review.date), 'MMMM dd, yyyy')}
      </div>
      <br/>
      {/* ================= SUMMARY ================= */}
        <b className='summary'>{this.props.review.summary}</b><br/>

      {/* ================= BODY ================= */}
        <div className='bodyText'>{this.props.review.body}  <br/></div>

      {/* ================= RESPONSE ================= */}
      {this.props.review.response !== null ?
        <div className='response'><b>Response:</b> <div>{this.props.review.response.slice(1, this.props.review.response.length - 1)}</div></div> : null }

      {/* ================= RECOMMENDED OR NAH? ================= */}
        { this.props.review.recommend ?
          <div className='recommend'>&#x2713; I recommend this product</div> : null }

      {/* ================= REVIEW HELPFUL ================= */}
      <div className="helpful">
      Helpful? <u className="helpfulYes" onClick={this.helpfulCounter}>Yes</u> &#40;{this.props.review.helpfulness}&#41; &ensp; | &ensp; <u>Report</u>
      </div>
    </div>
    )
  }
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
