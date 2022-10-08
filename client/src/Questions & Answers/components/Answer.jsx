import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render () {
    return (
      <div id="answerContent"> {this.props.answers.map((answer, index) => {
          return <li key={answer.id} target="_blank" id="answerText">  {answer.body}
          <div id="answererInfo">by {answer.answerer_name}, {answer.date} | Helpful? <input type="button" value="Yes"/>({answer.helpfulness}) | <input type="button" value="Report"/></div>
          </li>
      })}</div>
    )
  }
}

export default Answer;
