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
        <span onClick={this.props.addReviewOrCollapse}>X</span>
      </div>
    )
  }
}
export default AddRating