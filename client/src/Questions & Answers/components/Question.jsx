import React from 'react';
import AddAnswer from './AddAnswer.jsx';
import Answer from './Answer.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      answers: [],
      sortedAnswers: []
    }
    this.getAnswersList = this.getAnswersList.bind(this);
    this.sortAnswers = this.sortAnswers.bind(this);
  }

  componentDidMount () {
    this.getAnswersList()
  }


  getAnswersList() {
    var answersList = Object.values(this.state.question.answers)
    console.log('ANSSERS VALUES', answersList)
    this.setState({answers: answersList}, function() {
      this.sortAnswers();
    })
  }

  sortAnswers () {
    var answersCopy = this.state.answers.slice();
    answersCopy.sort((a, b) => b.helpfulness - a.helpfulness);
    this.setState({sortedAnswers: answersCopy})
  }

  render () {
    return (
      <div>
       Q: {this.state.question.question_body}
        < AddAnswer helpfulCount={this.state.question.question_helpfulness}/>
        < Answer answers={this.state.sortedAnswers}/>
      </div>
    )
  }
}

export default Question;
