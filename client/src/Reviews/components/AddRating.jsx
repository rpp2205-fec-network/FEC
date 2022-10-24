import React from 'react';
import axios from 'axios';

class AddRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: ''
    }
    this.handleClose = this.handleClose.bind(this);
    this.getProductName = this.getProductName.bind(this);
  }

  handleClose() {
    this.setState({addReview: false})
  }

  componentDidMount() {
    this.getProductName()
  }

  getProductName() {
    axios.get(`/productOverview/${this.props.product_id}`)
    .then((data) => {
      //console.log('PRODUCT NAME', data.data.name)
      this.setState({productName: data.data.name})
    })
    .catch((err) => {
      console.log('ERR IN GET REVIEWS \n', err)
    })
  }

  render() {
    return(
      <div className='addReviewForm'>
        <span className='closingX' onClick={this.props.addReviewOrCollapse}> x </span>
        <span className='reviewFormTitle'>
          Write your review
          <div className='reviewFormSubtitle'>
            About the {this.state.productName}
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