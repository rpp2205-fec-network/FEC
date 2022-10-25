import React from 'react';
import axios from 'axios';

class AddRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      rating: '',
      summary: '',
      body: '',
      recommended: '',
      name: '',
      email: '',
      photos: [],
      characteristcs: {}
    }
    this.handleClose = this.handleClose.bind(this);
    this.getProductName = this.getProductName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('submitted!')
    var reviewObj = {
      product_id: this.props.product_id,
      productName: this.state.productName,
      rating: this.state.rating,
      summary: this.state.summary,
      body: this.state.body,
      recommended: this.state.recommended,
      name: this.state.name,
      email: this.state.email,
      photos: this.state.photos,
      characteristcs: this.state.characteristcs
    }
    axios.post('/addReview', reviewObj)
      .then((submit) => {
        console.log('successfully submitted review!', submit)
      })
      .catch((err)=> {
        console.log('error submitting review', err)
      })
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

        {/* Form body */}
        <form className='reviewFormBody'>
          Rating
          <div className='submitButtonSpace'>
          <input className='submitReviewButton' type="submit" value="Submit" onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    )
  }
}
export default AddRating