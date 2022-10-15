import React from "react";
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Ratings from './components/Ratings.jsx';
import axios from "axios";

export default class ReviewIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: []
    }
  this.getReviews = this.getReviews.bind(this);
}

componentDidMount() {
  this.getReviews()
}

getReviews(sort = 'relevant') {
  axios.get(`/reviews/71720/${sort}`)
  .then((data) => {
      console.log('DATA IN Reviews COMPONENT \n', data)
      this.setState({reviews: data.data.results})
  })
  .catch((err) => {
      console.log('ERR IN GET REVIEWS \n', err)
  })
}

render() {
  return (
    <div>
      <p className='reviewsTitle'>RATINGS & REVIEWS</p>
      <div className='mainContainer'>
        <div className='Ratings'>
            <Ratings />
        </div>
        <div className='Reviews'>
          <div>
          {this.state.reviews.length} reviews, sorted by <span>
            <select className='dropdown' onChange={this.handleDropdown}>
              <option className='dropdownSelect' value='relevance'>relevance</option>
              <option className='dropdownSelect' value='helpful'>helpful</option>
              <option className='dropdownSelect' value='newest'>newest</option>
            </select>
            </span>
          </div>
          <List
          reviews={this.state.reviews}
          />
        </div>
      </div>
    </div>
  )
}
}