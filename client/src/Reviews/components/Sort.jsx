import React from 'react';
import ReactDOM from 'react-dom';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown(){

  }

  render() {
    return(
      <div>
        {this.props.reviews.length} reviews, sorted by <span>
          <select className='dropdown' onChange={this.handleDropdown}>
            <option className='dropdownSelect' value='relevance'>relevance</option>
            <option className='dropdownSelect' value='helpful'>helpful</option>
            <option className='dropdownSelect' value='newest'>newest</option>
          </select>
          </span>
      </div>
    )
}
}

export default Sort;
