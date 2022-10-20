import React from 'react';
import ReactDOM from 'react-dom';
import Ratings from 'react-ratings-declarative';
import axios from 'axios';
import { Line } from 'rc-progress';

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
      totalRatings: '',
      percent1: '',
      percent2: '',
      percent3: '',
      percent4: '',
      percent5: '',
      recommended: [],
      characteristics: []
    }
    this.getMetaData = this.getMetaData.bind(this);
  }

  componentDidMount() {
    this.getMetaData()
  }

  getMetaData(product_id = '71720') {
    axios.get(`/meta/${product_id}`)
    .then((data) => {
        //console.log('FRONT END META DATA \n', data.data)
        this.setState({
          rating1: Number(data.data.ratings[1]),
          rating2: Number(data.data.ratings[2]),
          rating3: Number(data.data.ratings[3]),
          rating4: Number(data.data.ratings[4]),
          rating5: Number(data.data.ratings[5]),
          average: ((5*Number(data.data.ratings[5]) + 4*Number(data.data.ratings[4]) + 3*Number(data.data.ratings[3])+ 2*Number(data.data.ratings[2]) + 1*Number(data.data.ratings[1]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1]))).toFixed(1),
          recommended: ((Number(data.data.recommended.true) / (Number(data.data.recommended.false) + Number(data.data.recommended.true)))*100).toFixed(0),
          totalRatings: Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1]),
          percent1: ((Number(data.data.ratings[1]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1])))*100,
          percent2: ((Number(data.data.ratings[2]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1])))*100,
          percent3: ((Number(data.data.ratings[3]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1])))*100,
          percent4: ((Number(data.data.ratings[4]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1])))*100,
          percent5: ((Number(data.data.ratings[5]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1])))*100,
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
        <div className='ratingsLink'><span className='floatLeft'>5 stars </span><span className='floatRight'>{this.state.rating5} rating(s)</span> <Line percent={(this.state.percent5)} strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor="black" className='ratingsBar'/></div>
        <div className='ratingsLink'><span className='floatLeft'>4 stars</span><span className='floatRight'>{this.state.rating4} rating(s)</span> <Line percent={(this.state.percent4)} strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor="black" className='ratingsBar'/></div>
        <div className='ratingsLink'><span className='floatLeft'>3 stars</span><span className='floatRight'>{this.state.rating3} rating(s)</span><Line percent={(this.state.percent3)} strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor="black" className='ratingsBar'/></div>
        <div className='ratingsLink'><span className='floatLeft'>2 stars</span><span className='floatRight'>{this.state.rating2} rating(s)</span> <Line percent={(this.state.percent2)} strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor="black" className='ratingsBar'/></div>
        <div className='ratingsLink'><span className='floatLeft'>1 stars</span><span className='floatRight'>{this.state.rating1} rating(s)</span> <Line percent={(this.state.percent1)} strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor="black" className='ratingsBar'/></div>
      </div>
    )
}
}

export default RatingsOverview;
