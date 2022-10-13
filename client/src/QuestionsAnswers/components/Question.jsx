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
    //answersCopy.sort((a, b) => b.helpfulness - a.helpfulness ||);
    //answersCopy.sort((a, b) => a === "Seller" ? -1 : b === "Seller" ? 1 : a>b ? 1 : -1);
    answersCopy.sort((a, b) => {
      if (a.answerer_name === 'Seller' || b.answerer_name === 'Seller') {
        return -1;
      } else {
        return b.helpfulness - a.helpfulness
      }
    })
    this.setState({sortedAnswers: answersCopy})
  }

  render () {
    return (
      <div id="individualQuestion">
        < AddAnswer helpfulCount={this.state.question.question_helpfulness}/>
       <h3 id="question">Q: {this.state.question.question_body}</h3>
        <div id="answer"> <h3>A: </h3>
        < Answer answers={this.state.sortedAnswers}/>
        </div>
      </div>
    )
  }
}

export default Question;
