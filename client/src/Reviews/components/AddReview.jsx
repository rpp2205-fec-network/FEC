import React from 'react';
import Ratings from 'react-ratings-declarative';
import axios from 'axios';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      rating: 0,
      summary: '',
      body: '',
      recommend: '',
      name: '',
      email: '',
      photos: [],
      characteristics: {},
      Size: '',
      Width: '',
      Comfort: '',
      Quality: '',
      Length: '',
      Fit: ''
    }
    this.handleClose = this.handleClose.bind(this);
    this.getProductName = this.getProductName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.changeChar = this.changeChar.bind(this);
    this.handleOpenCloudinary = this.handleOpenCloudinary.bind(this);
  }

  changeChar(event) {
    console.log('event.target.name', event.target.value)
    var charName = event.target.getAttribute('name')
    var charValue = Number(event.target.value)
    var charId = JSON.stringify(this.props.characteristics[charName].id)

    console.log('charID', typeof charId)
    this.setState({
      characteristics: {...this.state.characteristics, [charId]: charValue},
      [event.target.name]: event.target.value
    }, () => {console.log('this.state.characteristics', this.state.characteristics)})

  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    })
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
      recommend: Boolean(this.state.recommend),
      name: this.state.name,
      email: this.state.email,
      photos: this.state.photos,
      characteristics: this.state.characteristics
    }
    axios.post('/addReview', reviewObj)
      .then((submit) => {
        console.log('successfully submitted review!', submit)
        this.props.addReviewOrCollapse()
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
      this.setState({productName: data.data.name})
    })
    .catch((err) => {
      console.log('ERR IN GET REVIEWS \n', err)
    })
  }

  handleOpenCloudinary() {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dgle5fodq',
      uploadPreset: 'qgy3q6dp',
      googleApiKey: "<image_search_google_api_key>",
      showAdvancedOptions: true,
      multiple: true,
      defaultSource: "local",
      styles: {
          palette: {
              window: "#F5F5F5",
              sourceBg: "#FFFFFF",
              windowBorder: "#90a0b3",
              tabIcon: "#000000",
              inactiveTabIcon: "#69778A",
              menuIcons: "#3946E0",
              link: "#000000",
              action: "#000000",
              inProgress: "#3946E0",
              complete: "#3946E0",
              error: "#c43737",
              textDark: "#968989",
              textLight: "#FFFFFF"
          },
          fonts: {
              default: null,
              "'Poppins', sans-serif": {
                  url: "https://fonts.googleapis.com/css?family=Poppins",
                  active: true
              }
          }
      },
    },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log('Done! Here is the image info: ', result.info);
          this.setState({ photos: [...this.state.photos, result.info.secure_url] })
          console.log('this.state.photos', this.state.photos)
        }
      }
      )
      myWidget.open()
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

          {/* Star Rating */}
          <span className="modalTitle">Rating</span>
          <div>
            <Ratings
              rating={this.state.rating}
              changeRating={this.changeRating}
              widgetRatedColors="black"
              widgetDimensions="15px"
              widgetSpacings="1px"
              widgetHoverColors="black"
            >
              <Ratings.Widget onClick={() => this.changeRating(1)}/>
              <Ratings.Widget onClick={() => this.changeRating(2)}/>
              <Ratings.Widget onClick={() => this.changeRating(3)}/>
              <Ratings.Widget onClick={() => this.changeRating(4)}/>
              <Ratings.Widget onClick={() => this.changeRating(5)}/>
            </Ratings>
          </div>
          <div className="modalSubtitle">
          {this.state.rating === 0 ? 'Select your rating' : null}
          {this.state.rating === 1 ? 'Poor' : null}
          {this.state.rating === 2 ? 'Fair' : null}
          {this.state.rating === 3 ? 'Average' : null}
          {this.state.rating === 4 ? 'Good' : null}
          {this.state.rating === 5 ? 'Great' : null}
          </div>

          {/* Recommended */}
          <div className='modalRecommended'>
            <span className="modalTitle">Do you recommend this product?</span>
            <div>
              <input required type='radio' value='True' name='recommend' onChange={this.handleFormChange}/> <span className='modalRadio'>Yes</span>
              <input required type='radio' value='False' name='recommend' onChange={this.handleFormChange}/> No
            </div>
          </div>

          {/* Characteristics */}
          <div className='modalCharacteristics'>
            <span className='modalTitle'>Characteristics</span>
            {this.props.characteristics["Size"] !== undefined ?
            <div>
              <span className='characteristicTitleModalSize'>Size</span>
                <input required type='radio' value='1' name='Size' onChange={this.changeChar}/> <span className='modalRadio'>1</span>
                <input required type='radio' value='2' name='Size' onChange={this.changeChar}/> <span className='modalRadio'>2</span>
                <input required type='radio' value='3' name='Size' onChange={this.changeChar}/> <span className='modalRadio'>3</span>
                <input required type='radio' value='4' name='Size' onChange={this.changeChar}/> <span className='modalRadio'>4</span>
                <input required type='radio' value='5' name='Size' onChange={this.changeChar}/> <span className='modalRadio'>5</span>
                <span className='charSubtitleModal'>
                  {this.state.Size === '1' ? `A size too small` :
                  this.state.Size === '2' ? `½ a size too small` :
                  this.state.Size === '3' ? `Perfect` :
                  this.state.Size === '4' ? `½ a size too big` :
                  this.state.Size === '5' ? `A size too wide` :
                  null
                  }
                </span>
            </div> : null
            }

            {this.props.characteristics["Width"] !== undefined ?
            <div>
              <span className='characteristicTitleModalWidth'>Width</span>
                <input required type='radio' value='1' name='Width' onChange={this.changeChar}/> <span className='modalRadio'>1</span>
                <input required type='radio' value='2' name='Width' onChange={this.changeChar}/> <span className='modalRadio'>2</span>
                <input required type='radio' value='3' name='Width' onChange={this.changeChar}/> <span className='modalRadio'>3</span>
                <input required type='radio' value='4' name='Width' onChange={this.changeChar}/> <span className='modalRadio'>4</span>
                <input required type='radio' value='5' name='Width' onChange={this.changeChar}/> <span className='modalRadio'>5</span>
                <span className='charSubtitleModal'>
                  {this.state.Width === '1' ? `Too narrow` :
                  this.state.Width === '2' ? `Slightly narrow` :
                  this.state.Width === '3' ? `Perfect` :
                  this.state.Width === '4' ? `Slightly wide` :
                  this.state.Width === '5' ? `Too wide` :
                  null
                  }
                </span>
            </div> : null}

            {this.props.characteristics["Comfort"] !== undefined ?
            <div>
              <span className='characteristicTitleModalComfort'>Comfort</span>
                <input required type='radio' value='1' name='Comfort' onChange={this.changeChar}/> <span className='modalRadio'>1</span>
                <input required type='radio' value='2' name='Comfort' onChange={this.changeChar}/> <span className='modalRadio'>2</span>
                <input required type='radio' value='3' name='Comfort' onChange={this.changeChar}/> <span className='modalRadio'>3</span>
                <input required type='radio' value='4' name='Comfort' onChange={this.changeChar}/> <span className='modalRadio'>4</span>
                <input required type='radio' value='5' name='Comfort' onChange={this.changeChar}/> <span className='modalRadio'>5</span>
                <span className='charSubtitleModal'>
                  {this.state.Comfort === '1' ? `Uncomfortable` :
                  this.state.Comfort === '2' ? `Slightly uncomfortable` :
                  this.state.Comfort === '3' ? `Ok` :
                  this.state.Comfort === '4' ? `Comfortable` :
                  this.state.Comfort === '5' ? `Perfect` :
                  null
                  }
                </span>
            </div> : null
            }

        {this.props.characteristics["Quality"] !== undefined ?
            <div>
              <span className='characteristicTitleModalQuality'>Quality</span>
                <input required type='radio' value='1' name='Quality' onChange={this.changeChar}/> <span className='modalRadio'>1</span>
                <input required type='radio' value='2' name='Quality' onChange={this.changeChar}/> <span className='modalRadio'>2</span>
                <input required type='radio' value='3' name='Quality' onChange={this.changeChar}/> <span className='modalRadio'>3</span>
                <input required type='radio' value='4' name='Quality' onChange={this.changeChar}/> <span className='modalRadio'>4</span>
                <input required type='radio' value='5' name='Quality' onChange={this.changeChar}/> <span className='modalRadio'>5</span>
                <span className='charSubtitleModal'>
                  {this.state.Quality === '1' ? `Poor` :
                  this.state.Quality === '2' ? `Below average` :
                  this.state.Quality === '3' ? `What I expected` :
                  this.state.Quality === '4' ? `Pretty great` :
                  this.state.Quality === '5' ? `Perfect` :
                  null
                  }
                </span>
            </div> : null
        }


            {this.props.characteristics["Length"] !== undefined ?
            <div>
              <span className='characteristicTitleModalLength'>Length</span>
                <input required type='radio' value='1' name='Length' onChange={this.changeChar}/> <span className='modalRadio'>1</span>
                <input required type='radio' value='2' name='Length' onChange={this.changeChar}/> <span className='modalRadio'>2</span>
                <input required type='radio' value='3' name='Length' onChange={this.changeChar}/> <span className='modalRadio'>3</span>
                <input required type='radio' value='4' name='Length' onChange={this.changeChar}/> <span className='modalRadio'>4</span>
                <input required type='radio' value='5' name='Length' onChange={this.changeChar}/> <span className='modalRadio'>5</span>
                <span className='charSubtitleModal'>
                  {this.state.Length === '1' ? `Runs Short` :
                  this.state.Length === '2' ? `Runs slightly short` :
                  this.state.Length === '3' ? `Perfect` :
                  this.state.Length === '4' ? `Runs slightly long` :
                  this.state.Length === '5' ? `Runs long` :
                  null
                  }
                </span>
            </div> : null
              }

          {this.props.characteristics["Fit"] !== undefined ?
            <div>
              <span className='characteristicTitleModalFit'>Fit</span>
                <input required type='radio' value='1' name='Fit' onChange={this.changeChar}/> <span className='modalRadio'>1</span>
                <input required type='radio' value='2' name='Fit' onChange={this.changeChar}/> <span className='modalRadio'>2</span>
                <input required type='radio' value='3' name='Fit' onChange={this.changeChar}/> <span className='modalRadio'>3</span>
                <input required type='radio' value='4' name='Fit' onChange={this.changeChar}/> <span className='modalRadio'>4</span>
                <input required type='radio' value='5' name='Fit' onChange={this.changeChar}/> <span className='modalRadio'>5</span>
                <span className='charSubtitleModal'>
                  {this.state.Fit === '1' ? `Runs tight` :
                  this.state.Fit === '2' ? `Runs slightly tight` :
                  this.state.Fit === '3' ? `Perfect` :
                  this.state.Fit === '4' ? `Runs slightly loose` :
                  this.state.Fit === '5' ? `Runs loose` :
                  null
                  }
                </span>
            </div> : null
          }

          </div>

          {/* Review Summary */}
          <div className="reviewSummary">
            <span className="modalTitle">Review Summary</span>
            <div>
              <input className='reviewSummaryInput' style={{width: "284px"}} type="text" name="summary" maxLength={60} required placeholder="Example: Best purchase ever!" value={this.state.summary} onChange={this.handleFormChange}/>
            </div>
          </div>

          {/* Review Body */}
          <div>
          <span className="modalTitle">Review Body</span>
            <div>
              <textarea type="textarea" style={{width: '700px', height: '35px', padding: '1px'}} name="body" minLength={50} maxLength={1000} required placeholder="Why did you like the product or not?" value={this.state.body} onChange={this.handleFormChange}></textarea>
              <div className="modalSubtitle">
              {this.state.body.length <= 49 ? `Minimum characters left: [${50 - this.state.body.length}]` : `Minimum reached \u2713`}
              </div>
            </div>
          </div>

          {/* Image Uploads */}
          <div>
            <span className="modalTitle">Images</span>
            <div>
              <button type={'button'} buttonclass='cloudinary_button' className='cloudinary_button' onClick={() => this.handleOpenCloudinary()}>Upload image(s)</button>
              <div className="modalSubtitle">
                {this.state.photos.length === 0 ? `[optional] Add up to 5 photos` :
                this.state.photos.length === 1 ? `1/5 image uploaded` :
                this.state.photos.length < 5 ? `${this.state.photos.length}/5 images uploaded` :
                this.state.photos.length === 5 ? `${this.state.photos.length}/5 images uploaded \u2713` :
                this.state.photos.length > 5 ? `Please remove ${this.state.photos.length - 5} photo(s) before submitting` :
                null}
              </div>
            </div>
          </div>

          {/* Nickname */}
          <div>
          <span className="modalTitle">Nickname</span>
            <div>
              <input type="text" name="name" maxLength={60} required placeholder="Example: jackson11" value={this.state.name} onChange={this.handleFormChange}/>
              <div className="modalSubtitle">
              For privacy reasons, do not use your full name or email address
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
          <span className="modalTitle">Email Address</span>
            <div>
              <input type="text" name="email" maxLength={60} required placeholder="Example: jackson11@email.com" value={this.state.email} onChange={this.handleFormChange}/>
              <div className="modalSubtitle">
              For authentication reasons only -- you will not be emailed
              </div>
            </div>
          </div>

          <div className='submitButtonSpace'>
            <input className='submitReviewButton' type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}
export default AddReview