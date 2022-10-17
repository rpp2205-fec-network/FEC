import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating1: '',
      rating2: '',
      rating3: '',
      rating4: '',
      rating5: '',
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
        console.log('FRONT END META DATA \n', data.data)
        this.setState({
          rating1: Number(data.data.ratings[1]),
          rating2: Number(data.data.ratings[2]),
          rating3: Number(data.data.ratings[3]),
          rating4: Number(data.data.ratings[4]),
          rating5: Number(data.data.ratings[5]),
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
        {((5*this.state.rating5 + 4*this.state.rating4 + 3*this.state.rating3 + 2*this.state.rating2 + 1*this.state.rating1)/(this.state.rating5 + this.state.rating4 + this.state.rating3 + this.state.rating2 + this.state.rating1)).toFixed(1)}
        </div>
        {/* Rating Breakdown */}
        <div>5: {this.state.rating5}</div>
        <div>4: {this.state.rating4}</div>
        <div>3: {this.state.rating3}</div>
        <div>2: {this.state.rating2}</div>
        <div>1: {this.state.rating1}</div>
      </div>
    )
}
}

export default Ratings;
