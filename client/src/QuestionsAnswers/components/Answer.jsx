import React from 'react';
const axios = require('axios');

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulClicked: false
    };
    this.wasHelpful = this.wasHelpful.bind(this);
  }

  wasHelpful (e, answer) {
    e.preventDefault();
    //var addHelpfulPoint = function() {answer.helpfulness ++;}
    axios.put('/putHelpful', {id: answer.id})
    .then((response) => {
      console.log('That was helpful!')
      this.setState({helpfulClicked: true})
    })
    .catch(err => console.log('could not be helpful'))
  }

  render () {
    return (
      <div id="answerContent"> {this.props.answers.map((answer, index) => {
        return <li key={answer.id} target="_blank" id="answerText">  {answer.body}
        <div id="answererInfo">by {answer.answerer_name === 'Seller' ? <span style={{fontWeight: 'bold'}}>{answer.answerer_name}</span> : answer.answerer_name},
        {answer.date} | Helpful? <input type="button" value="Yes" onClick={(e) => this.wasHelpful(e, answer)}/>({answer.helpfulness}) |
        <input type="button" value="Report"/></div>
        </li>

      })}</div>
    )
  }
}

export default Answer;
