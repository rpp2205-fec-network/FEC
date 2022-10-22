import React from "react";
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import RatingsOverview from './components/RatingsOverview.jsx';
import axios from "axios";
import ErrorBoundary from "./ReviewErrorBoundary.jsx";

export default class ReviewIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: [],
      filteredReviews: {5: [], 4: [], 3: [], 2: [], 1: [],},
      combinedArray: [],
      filterClicked: false
    }
  this.getReviews = this.getReviews.bind(this);
  this.filterByRating = this.filterByRating.bind(this);
}

filterByRating(starRating) {
  //takes in the number. if doesn't exist, add. does exist, remove
  if (this.state.filteredReviews[starRating] !== []) {
    this.setState(prevState => ({
      ...prevState.reviews,
      ...prevState.filterClicked,
      filteredReviews: {...prevState.filteredReviews, starRating: []}
      })
    )
  } else {
    //console.log("rating", starRating)
    //take this rating, and push any ratings into filteredReviews array
    //console.log("reviews", this.state.reviews)
    var result = this.state.reviews.filter(review => review.rating === starRating)
    this.setState(prevState => ({
      ...prevState.reviews,
      filterClicked: true,
      filteredReviews: {...prevState.filteredReviews, starRating: result}
      })
    )
    console.log('this.state.filteredReviews', this.state.filteredReviews)
  }

  this.setState({combinedArray: Object.values(this.state.filteredReviews)})

    if (this.state.filteredReviews[5] === [] &&
      this.state.filteredReviews[4] === [] &&
      this.state.filteredReviews[3] === [] &&
      this.state.filteredReviews[2] === [] &&
      this.state.filteredReviews[1] === []
    ) {
      this.setState({filterClicked: false})
}
}

componentDidMount() {
  this.getReviews('relevant')
}

getReviews(sort = 'relevant') {
  axios.get(`/reviews/71720/${sort}`)
  .then((data) => {
    //console.log('DATA IN Reviews COMPONENT \n', data.data.results)
    this.setState({reviews: data.data.results})
  })
  .catch((err) => {
    console.log('ERR IN GET REVIEWS \n', err)
  })
}

render() {
  //run a func that goes thru obj concats array, send this to List
  //const finalArrays = Object.values(this.state.filteredReviews)
  //console.log('final', finalArrays)
  return (
    <div className='reviewsOverview'>
      <p className='reviewsTitle'>RATINGS & REVIEWS</p>
      <div className='mainContainer'>
        <div className='Ratings'>
          <ErrorBoundary>
            <RatingsOverview filterByRating={this.filterByRating}/>
          </ErrorBoundary>
        </div>

        <div className='Reviews'>
          <div className='sorting'>
          {this.state.reviews.length} reviews, sorted by <span>
            <select className='dropdown' onChange={(e) => this.getReviews(e.target.value)}>
              <option className='dropdownSelect' value='relevance'>relevance</option>
              <option className='dropdownSelect' value='helpful'>helpful</option>
              <option className='dropdownSelect' value='newest'>newest</option>
            </select>

                {this.state.filterClicked ? <span className='filterApplied'>
                  <span className='filtersText'>[ Filter(s) has been applied ]</span>
                  <button className='removeAllFilters' onClick={() => this.setState({filterClicked: false})}>Remove all filters</button>
                  </span>
                : null}

            </span>
          </div>

          <ErrorBoundary>
            {this.state.filterClicked === true ?
              <List
                reviews={this.state.combinedArray}
              /> :
              <List
                reviews={this.state.reviews}
              />
            }
          </ErrorBoundary>
        </div>
      </div>
    </div>
  )
}
}
