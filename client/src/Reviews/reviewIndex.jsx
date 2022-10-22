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
      filteredReviews: {5: [], 4: [], 3: [], 2: [], 1: []},
      filterClicked: false
    }
  this.getReviews = this.getReviews.bind(this);
  this.filterByRating = this.filterByRating.bind(this);
}



filterByRating(starRating) {
  console.log("rating", typeof starRating)
  console.log("reviewss", this.state.filteredReviews[starRating.toString()])

  if (this.state.filteredReviews[5] === [] &&
    this.state.filteredReviews[4] === [] &&
    this.state.filteredReviews[3] === [] &&
    this.state.filteredReviews[2] === [] &&
    this.state.filteredReviews[1] === []
  ) {
    this.setState({filterClicked: false})
  }
  if (this.state.filteredReviews[starRating].length === 0) {
    //console.log('this.state.reviews', typeof this.state.reviews[0].rating)
    var result = this.state.reviews.filter(review => review.rating === starRating)
    //console.log('result', result)
    this.setState({
      filterClicked: true,
      filteredReviews: {...this.state.filteredReviews, [starRating]: result}
      })
    //console.log('this.state.filteredReviews', this.state.filteredReviews)
  } else {
      //if the clicked rating isn't empty, then reset that number to an empty array
      this.setState({
        filterClicked: true,
        filteredReviews: {...this.state.filteredReviews, [starRating]: []}
        }
      )
  }

}

componentDidMount() {
  this.getReviews('relevant')
}

getReviews(sort = 'relevant') {
  //axios.get(`/reviews/${this.props.product_id}/${sort}`)
  axios.get(`/reviews/71717/${sort}`)
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
  const finalArrays = this.state.filteredReviews[5].concat(this.state.filteredReviews[4], this.state.filteredReviews[3], this.state.filteredReviews[2], this.state.filteredReviews[1])
  console.log('final Combined array', finalArrays)
  return (
    <div className='reviewsOverview'>
      <p className='reviewsTitle'>RATINGS & REVIEWS</p>
      <div className='mainContainer'>
        <div className='Ratings'>
          <ErrorBoundary>
            <RatingsOverview
            filterByRating={this.filterByRating}
            product_id={this.props.product_id}
            />
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
                reviews={finalArrays}
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
