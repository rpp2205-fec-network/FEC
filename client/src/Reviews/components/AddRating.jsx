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

  handleSubmit(){
    event.preventDefault()
    console.log('submitted!')
    // axios.post(
    //   '/glossary',
    //   {word: this.state.word, definition: this.state.definition}
    //   )
    //   .then(this.props.getWords())
    //   .catch((err)=> console.log('axios submit error', err))
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