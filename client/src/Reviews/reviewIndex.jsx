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
  if (this.state.filteredReviews[starRating].length === 0) {
    var result = this.state.reviews.filter(review => review.rating === starRating)
    this.setState({
      filterClicked: true,
      filteredReviews: {...this.state.filteredReviews, [starRating]: result}
      })
  } else {
      //if the clicked rating isn't empty, then reset that number to an empty array
      if (this.state.filteredReviews[5] === [] &&
        this.state.filteredReviews[4] === [] &&
        this.state.filteredReviews[3] === [] &&
        this.state.filteredReviews[2] === [] &&
        this.state.filteredReviews[1] === []
      ) {
        this.setState({filterClicked: false})
      } else {
        this.setState({
          filterClicked: true,
          filteredReviews: {...this.state.filteredReviews, [starRating]: []}
          }
        )
      }
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
  var finalArrays = this.state.filteredReviews[5].concat(this.state.filteredReviews[4], this.state.filteredReviews[3], this.state.filteredReviews[2], this.state.filteredReviews[1])
  var count = 0
  for (var key in this.state.filteredReviews) {
    count += this.state.filteredReviews[key].length
  }
  return (
    <div className='totalContainer'>
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
                {this.state.filterClicked && count !== 0 ? <span className='filterApplied'>
                  <span className='filtersText'>[ Filter(s) has been applied ]</span>
                  <button className='removeAllFilters' onClick={() => this.setState({filterClicked: false, filteredReviews: {5: [], 4: [], 3: [], 2: [], 1: []}})}>Remove all filters</button>
                  </span>
                : null}

            </span>
          </div>

          <ErrorBoundary>
            {count === 0 ?
              <List
              reviews={this.state.reviews}
              product_id={this.props.product_id}
              /> :
              <List
              reviews={finalArrays}
              product_id={this.props.product_id}
              />
            }
          </ErrorBoundary>
        </div>
      </div>
    </div>
    </div>
  )
}
}
