import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './Tile.jsx'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: 2,
      fullyExpanded: false
    }
    this.showMoreOrCollapse = this.showMoreOrCollapse.bind(this);
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
          <button>Add A Review</button>
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
          <button>Add A Review</button>
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
          <button className="reviewsListButton">Add A Review +</button>
        </div>
      )
    }
  }

}

export default List;


