import React from 'react';
const axios = require('axios');

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulClicked: false,
      showAllItems: false
    };
    this.wasHelpful = this.wasHelpful.bind(this);
    this.showCollapseAnswers = this.showCollapseAnswers.bind(this);
  }

  wasHelpful (e, answer) {
    e.preventDefault();
    axios.put('/putHelpful', {id: answer.id})
    .then((response) => {
      console.log('That was helpful!')
      this.setState({helpfulClicked: true})
    })
    .catch(err => console.log('could not be helpful'))
  }

  showCollapseAnswers (e) {
    e.preventDefault();
    this.state.showAllItems === false ? this.setState({showAllItems: true}) : this.setState({showAllItems: false})
  }

  render () {
    if (this.state.showAllItems === false) {
      return (
        <div>
        <div id="answerContent"> {this.props.answers.slice(0, 2).map((answer, index) => {
          return <li key={answer.answer_id} target="_blank" id="answerText">  {answer.body}
          <div id="answererInfo">by {answer.answerer_name === 'Seller' ? <span style={{fontWeight: 'bold'}}>{answer.answerer_name}</span> : answer.answerer_name},
          {answer.date} | Helpful? <input type="button" value="Yes" onClick={(e) => this.wasHelpful(e, answer)}/>({answer.helpfulness}) |
          <input type="button" value="Report"/></div>
          </li>
        })} </div>
          <input type="button" value="Load more answers" onClick={(e) => this.showCollapseAnswers(e)}/>
        </div>
      )
    } else {
      return (
        <div>
        <div id="allAnswerContent"> {this.props.answers.map((answer, index) => {
          return <li key={answer.answer_id} target="_blank" id="answerText">  {answer.body}
          <div id="answererInfo">by {answer.answerer_name === 'Seller' ? <span style={{fontWeight: 'bold'}}>{answer.answerer_name}</span> : answer.answerer_name},
          {answer.date} | Helpful? <input type="button" value="Yes" onClick={(e) => this.wasHelpful(e, answer)}/>({answer.helpfulness}) |
          <input type="button" value="Report"/></div>
          </li>
        })} </div>
          <input type="button" value="Collapse answers" onClick={(e) => this.showCollapseAnswers(e)}/>
        </div>
      )
    }
  }
}

export default Answer;
