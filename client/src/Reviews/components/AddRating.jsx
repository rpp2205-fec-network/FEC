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
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    console.log('check event name', event.target.name)
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('submitted!')
    var reviewObj = {
      product_id: this.props.product_id,
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
        <form className='reviewFormBody' onSubmit={this.handleSubmit}>
          Rating

          {/* Recommended */}
          <div>
            Do you recommend this product?
            <div>
              <input type='radio' value='Yes' name='recommended' onChange={this.handleFormChange}/> Yes
              <input type='radio' value='No' name='recommended' onChange={this.handleFormChange}/> No
            </div>
          </div>

          {/* Recommended */}

          <div className='submitButtonSpace'>
            <input className='submitReviewButton' type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}
export default AddRating