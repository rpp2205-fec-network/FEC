import React from 'react';
import ReactDOM from 'react-dom';
import Ratings from 'react-ratings-declarative';
import axios from 'axios';
import { Line } from 'rc-progress';

class RatingsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating1: '',
      rating2: '',
      rating3: '',
      rating4: '',
      rating5: '',
      average: '',
      percent1: '',
      percent2: '',
      percent3: '',
      percent4: '',
      percent5: '',
      recommended: [],
      size: '',
      width: '',
      comfort: '',
      quality: '',
      length: '',
      fit: ''
    }
    this.getMetaData = this.getMetaData.bind(this);
    this.filterRatingsClick = this.filterRatingsClick.bind(this);
  }

  filterRatingsClick(e) {
    var ratingNum = Number(e.target.innerText.substr(0, 1))
    console.log('clicked on ratings!', ratingNum)
    this.props.filterByRating(ratingNum)
  }

  componentDidMount() {
    this.getMetaData()
  }

  getMetaData() {
    axios.get(`/meta/${this.props.product_id}/`)
    .then((data) => {
      //console.log('FRONT END META DATA \n', data.data.characteristics)
        this.setState({
          rating1: Number(data.data.ratings[1]),
          rating2: Number(data.data.ratings[2]),
          rating3: Number(data.data.ratings[3]),
          rating4: Number(data.data.ratings[4]),
          rating5: Number(data.data.ratings[5]),
          average: ((5*Number(data.data.ratings[5]) + 4*Number(data.data.ratings[4]) + 3*Number(data.data.ratings[3])+ 2*Number(data.data.ratings[2]) + 1*Number(data.data.ratings[1]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1]))).toFixed(1),
          recommended: ((Number(data.data.recommended.true) / (Number(data.data.recommended.false) + Number(data.data.recommended.true)))*100).toFixed(0),
          percent1: ((Number(data.data.ratings[1]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1])))*100,
          percent2: ((Number(data.data.ratings[2]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1])))*100,
          percent3: ((Number(data.data.ratings[3]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1])))*100,
          percent4: ((Number(data.data.ratings[4]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1])))*100,
          percent5: ((Number(data.data.ratings[5]))/(Number(data.data.ratings[5]) + Number(data.data.ratings[4]) + Number(data.data.ratings[3])+ Number(data.data.ratings[2]) + Number(data.data.ratings[1])))*100,
        })
        if (data.data.characteristics.Size !== undefined) {
          this.setState({
            size: Number((data.data.characteristics.Size.value/5)*100)
          })
        }
        if (data.data.characteristics.Width !== undefined) {
          this.setState({
            width: Number((data.data.characteristics.Width.value/5)*100)
          })
        }
        if (data.data.characteristics.Comfort !== undefined) {
          this.setState({
            comfort: Number((data.data.characteristics.Comfort.value/5)*100)
          })
        }
        if (data.data.characteristics.Quality !== undefined) {
          this.setState({
            quality: Number((data.data.characteristics.Quality.value/5)*100)
          })
        }
        if (data.data.characteristics.Fit !== undefined) {
          this.setState({
            fit: Number((data.data.characteristics.Fit.value/5)*100)
          })
        }
        if (data.data.characteristics.Length !== undefined) {
          this.setState({
            length: Number((data.data.characteristics.Length.value/5)*100)
          })
        }
    })
    .catch((err) => {
        console.log('ERR IN META GET REVIEWS \n', err)
    })
  }

  render() {
    return(
      <div>
        <div className='avgRating'>
        {/* Average Rating */}
        {this.state.average}
        <span className='ratingStar'>
        <Ratings
        rating={Number(this.state.average)}
        widgetRatedColors="black"
        widgetDimensions="15px"
        widgetSpacings="1px"
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings></span>
        </div>

        {/* Percentage Recommended */}
        <div className='percentageRecommended'>
        {this.state.recommended}% of reviewers recommend this product
        </div>

        {/* Rating Breakdown */}
        <div className='ratingsLink'><span className='floatLeft' onClick={this.filterRatingsClick}>5 stars</span>
          <span className='floatRight'>{this.state.rating5} rating(s)</span> <Line percent={(this.state.percent5)} strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor="black" className='ratingsBar'/></div>
        <div className='ratingsLink'><span className='floatLeft' onClick={this.filterRatingsClick}> 4 stars</span>
          <span className='floatRight'>{this.state.rating4} rating(s)</span> <Line percent={(this.state.percent4)} strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor="black" className='ratingsBar'/></div>
        <div className='ratingsLink'><span className='floatLeft' onClick={this.filterRatingsClick}> 3 stars</span>
          <span className='floatRight'>{this.state.rating3} rating(s)</span> <Line percent={(this.state.percent3)} strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor="black" className='ratingsBar'/></div>
        <div className='ratingsLink'><span className='floatLeft' onClick={this.filterRatingsClick}> 2 stars</span>
          <span className='floatRight'>{this.state.rating2} rating(s)</span> <Line percent={(this.state.percent2)} strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor="black" className='ratingsBar'/></div>
        <div className='ratingsLink'><span className='floatLeft' onClick={this.filterRatingsClick}> 1 star</span>
          <span className='floatRight'>{this.state.rating1} rating(s)</span> <Line percent={(this.state.percent1)} strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor="black" className='ratingsBar'/></div>

        {/* Characteristics Breakdown */}
        <div className='characteristicsBreakdown'>
          <br/>
          {(this.state.size !== '') ?
          <div>
            <div className='characteristics'>Size <Line percent={[this.state.size, .2]} gapPosition="top" strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor={["#D3D3D3", "black"]} className='ratingsBar'/></div>
            <div className='charLabel'>
              <div className='charLeft'>Too small</div>
              <div className='charMid'>Perfect</div>
              <div className='charRight'>Too large</div>
            </div>
          </div>
          : null}
          {(this.state.width !== '') ?
          <div>
            <div className='characteristics'>Width <Line percent={[this.state.width, .2]} gapPosition="top" strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor={["#D3D3D3", "black"]} className='ratingsBar'/></div>
            <div className='charLabel'>
            <div className='charLeft'>Too narrow</div>
            <div className='charMid'>Perfect</div>
            <div className='charRight'>Too wide</div>
          </div>
      </div>
          : null}
          {(this.state.comfort !== '') ?
          <div>
            <div className='characteristics'>Comfort <Line percent={[this.state.comfort, .2]} gapPosition="top" strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor={["#D3D3D3", "black"]} className='ratingsBar'/></div>
            <div className='charLabel'>
                <div className='charLeft'>Uncomfortable</div>
                <div className='charMid'>Ok</div>
                <div className='charRight'>Perfect</div>
            </div>
          </div>
          : null}
          {(this.state.quality !== '') ?
          <div>
            <div className='characteristics'>Quality <Line percent={[this.state.quality, .2]} gapPosition="top" strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor={["#D3D3D3", "black"]} className='ratingsBar'/></div>
            <div className='charLabel'>
                <div className='charLeft'>Poor</div>
                <div className='charMid'>What I expected</div>
                <div className='charRight'>Great</div>
            </div>
          </div>
          : null}

          {(this.state.length !== '') ?
          <div>
            <div className='characteristics'>Length <Line percent={[this.state.length, .2]} gapPosition="top" strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor={["#D3D3D3", "black"]} className='ratingsBar'/></div>
            <div className='charLabel'>
                <div className='charLeft'>Runs short</div>
                <div className='charMid'>Perfect</div>
                <div className='charRight'>Runs long</div>
            </div>
          </div>
          : null}

          {this.state.fit !== '' ?
          <div>
            <div className='characteristics'>Fit <Line percent={[this.state.fit, .2]} gapPosition="top" strokeLinecap={'square'} strokeWidth={4} trailWidth={4} trailColor="#D3D3D3" strokeColor={["#D3D3D3", "black"]} className='ratingsBar'/></div>
            <div className='charLabel'>
                <div className='charLeft'>Runs tight</div>
                <div className='charMid'>Perfect</div>
                <div className='charRight'>Runs long</div>
            </div>
          </div>
            : null}
        </div>

      </div>
    )
}
}

export default RatingsOverview;
