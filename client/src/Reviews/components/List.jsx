import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './Tile.jsx';
import AddRating from './AddRating.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: 2,
      fullyExpanded: false,
      addReview: false
    }
    this.showMoreOrCollapse = this.showMoreOrCollapse.bind(this);
    this.addReviewOrCollapse = this.addReviewOrCollapse.bind(this);
  }

  addReviewOrCollapse() {
    if (this.state.addReview === true) {
      this.setState({addReview: false})
    } else {
      this.setState({addReview: true})
    }
  }

  showMoreOrCollapse() {
    if (this.state.fullyExpanded === true) {
      this.setState({itemsToShow: 2, fullyExpanded: false})
    } else {
      this.setState({itemsToShow: this.state.itemsToShow + 2})

      if (this.state.itemsToShow + 2 >= this.props.reviews.length) {
        this.setState({itemsToShow: this.props.reviews.length, fullyExpanded: true})
      }
    }
  }


  render() {
    if (this.props.reviews.length === 0) {
      return (
        <div>
          <button onClick={this.addReview}>Add A Review</button>
        </div>
      )
    } else if (this.props.reviews.length <= 2) {
      return (
        <div>
          {this.props.reviews.slice(0, this.state.itemsToShow).map((review) =>
          <Tile
          key={review.review_id}
          review={review}/>
          )}
          <button onClick={this.addReview}>Add A Review</button>
        </div>
      )
    } else {
      return (
        <div>
          <div className="scrollableReviews">
          {this.props.reviews.slice(0, this.state.itemsToShow).map((review) =>
          <Tile
          key={review.review_id}
          review={review}/>
          )}
          </div>
          <button className="reviewsListButton reviewsToggleButton" onClick={this.showMoreOrCollapse}>
            {(this.state.fullyExpanded && this.state.itemsToShow >= this.props.reviews.length) ? (
              <span onClick={this.showMoreOrCollapse}>Collapse</span>
              ) : (
                <span onClick={this.showMoreOrCollapse}>More Reviews</span>
              )
          }
            </button>
          <button className="reviewsListButton" onClick={this.addReviewOrCollapse}>Add A Review +</button>
          {this.state.addReview === true ? <AddRating addReviewOrCollapse={this.addReviewOrCollapse}/> : null}
        </div>
      )
    }
  }

}

export default List;


