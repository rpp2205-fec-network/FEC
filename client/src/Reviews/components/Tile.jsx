import React from 'react';
import Ratings from 'react-ratings-declarative';
import { format } from 'date-fns'

class Tile extends React.Component {
  //console.log('TILE PROP TEST', props.review)
  constructor(props) {
    super(props);
    this.state = {
      bodyCharactersToShow: 250,
      expanded: false,
      modalOpen: false,
      clickedPhotoURL: ''
    }
    this.helpfulCounter = this.helpfulCounter.bind(this);
    this.toggleBody = this.toggleBody.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  helpfulCounter = () => {
    this.props.review.helpfulness + 1
  }

  toggleBody() {
    if (this.state.expanded === true) {
      this.setState({bodyCharactersToShow: 250, expanded: false})
    } else {
      this.setState({bodyCharactersToShow: this.props.review.body.length, expanded: true})
    }
  }

  toggleModal(photoURL) {
    this.setState({clickedPhotoURL: photoURL})
    console.log(this.state.clickedPhotoURL)
    if (this.state.modalOpen === true) {
      this.setState({modalOpen: false})
    } else {
      this.setState({modalOpen: true})
    }
  }

  render() {
    return (
    <div className="tile">

      {/* ================= RATINGS ================= */}
      <Ratings
        rating={this.props.review.rating}
        widgetRatedColors="black"
        widgetDimensions="15px"
        widgetSpacings="1px"
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>

      {/* ================= USER & DATE ================= */}
      <div>
      <div className='userAndDate'>
        {this.props.review.reviewer_name}, {format(new Date(this.props.review.date), 'MMMM dd, yyyy')}
      </div>
      </div>
      {/* ================= SUMMARY ================= */}
        <div><b className='summary'>{this.props.review.summary}</b></div>

      {/* ================= BODY ================= */}
        <div><div className='bodyText'>{this.props.review.body.slice(0, this.state.bodyCharactersToShow)}
        {this.props.review.body.length > 250 ?
        <div><button className='bodyButton' onClick={this.toggleBody}>
          {(this.state.expanded && this.props.review.body.length > 250) ? (
            <div>Show Less</div>
          ) : (
            <div>Show more</div>
          )}
          </button></div> : null
          }
        </div></div>

      {/* ================= PHOTOS (BODY) ================= */}
      <div className='photoContainer'>
        {this.props.review.photos.slice(0, 5).map((photo) =>
          <div key={photo.id}>
            <img className='reviewPhoto' onClick={() => this.toggleModal(photo.url)} key={photo.id} src={photo.url} alt={photo.id}/>
          </div>
        )}
      </div>

      {
      this.state.modalOpen ? (
            <div className='modalPhoto'>
              <dialog open className='specificModalPhoto'>
                <img onClick={this.toggleModal} src={this.state.clickedPhotoURL}/>
              </dialog>
            </div>
          ) : null
      }

      {/* <div className='photoContainer'>
        {this.props.review.photos.slice(0, 5).map((photo) =>
          <div key={photo.id}>
          <img className='reviewPhoto' onClick={this.toggleModal} key={photo.id} src={photo.url} alt={photo.id}/>
          {this.state.modalOpen && (
            <div className='modalPhoto'>
              <dialog open>
                <img onClick={this.toggleModal} key={photo.id} src={photo.url} alt={photo.id}/>
              </dialog>
            </div>
          )
          }
          </div>
        )}
      </div> */}

      {/* ================= RESPONSE ================= */}
      {this.props.review.response !== null ?
        <div className='response'><b>Response from seller:</b> <div>{this.props.review.response.slice(1, this.props.review.response.length - 1)}</div></div> : null }

      {/* ================= RECOMMENDED OR NAH? ================= */}
        { this.props.review.recommend ?
          <div className='recommend'>&#x2713; I recommend this product</div> : null }

      {/* ================= REVIEW HELPFUL ================= */}
      <div className="helpful">
      Helpful? <u className="helpfulYes" onClick={this.helpfulCounter}>Yes</u> &#40;{this.props.review.helpfulness}&#41; &ensp; | &ensp; <u>Report</u>
      </div>
    </div>
    )
  }
}
export default Tile;