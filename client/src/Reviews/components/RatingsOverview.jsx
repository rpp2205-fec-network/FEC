import React from 'react';
import ReactDOM from 'react-dom';
import Ratings from 'react-ratings-declarative';
import axios from 'axios';

class RatingsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating1: '',
      rating2: '',
      rating3: '',
      rating4: '',
      rating5: '',
      average: '',
      recommended: [],
      characteristics: []
    }
    this.getMetaData = this.getMetaData.bind(this);
    //this.getAverageRating = this.getAverageRating.bind(this);
  }

  componentDidMount() {
    this.getMetaData()
    //this.getAverageRating()
  }

  getMetaData() {
    axios.get('/getMetaData/meta/:product_id')
    .then((data) => {
        //console.log('FRONT END META DATA \n', data.data)
        this.setState({
          rating1: Number(data.data.ratings[1]),
          rating2: Number(data.data.ratings[2]),
          rating3: Number(data.data.ratings[3]),
          rating4: Number(data.data.ratings[4]),
          rating5: Number(data.data.ratings[5]),
          average: ((5*Number(data.data.ratings[5]) + 4*Number(data.data.ratings[4]) + 3*Number(data.data.ratings[3])+ 2*Number(data.data.ratings[2]) + 1*Number(data.data.ratings[1]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1]))).toFixed(1),
          recommended: ((Number(data.data.recommended.true) / (Number(data.data.recommended.false) + Number(data.data.recommended.true)))*100).toFixed(0)
        })
    })
    .catch((err) => {
        console.log('ERR IN META GET REVIEWS \n', err)
    })
  }

  render() {
    return(
      <div>
        <div className='avgRating'>
        {/* Average Rating */}
        {this.state.average}
        <span className='ratingStar'>
        <Ratings
        rating={Number(this.state.average)}
        widgetRatedColors="black"
        widgetDimensions="15px"
        widgetSpacings="1px"
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings></span>
        </div>

        {/* Percentage Recommended */}
        <div className='percentageRecommended'>
        {this.state.recommended}% of reviewers recommend this product
        </div>

        {/* Rating Breakdown */}
        <div>5 stars: {this.state.rating5}</div>
        <div>4 stars: {this.state.rating4}</div>
        <div>3 stars: {this.state.rating3}</div>
        <div>2 stars: {this.state.rating2}</div>
        <div>1 stars: {this.state.rating1}</div>
      </div>
    )
}
}

export default RatingsOverview;
