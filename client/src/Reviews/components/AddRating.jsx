import React from 'react';

class AddRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addReivew: false
    }
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({addReview: false})
  }


  render() {
    return(
      <div className='addReviewForm'>
        <span className='closingX' onClick={this.props.addReviewOrCollapse}> x </span>
        <span className='reviewFormTitle'>
          Write your review
          <div className='reviewFormSubtitle'>
            About the
          </div>
        </span>
        <form className='reviewFormBody'>
        How many stars?
        </form>
      </div>
    )
  }
}
export default AddRating