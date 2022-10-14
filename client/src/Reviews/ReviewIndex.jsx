import React from "react";
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
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

getReviews() {
  axios.get('/reviews')
  .then((data) => {
      //console.log('DATA IN Reviews COMPONENT \n', data.data.results)
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
      <List
      reviews={this.state.reviews}
      />
    </div>
  )
}
}