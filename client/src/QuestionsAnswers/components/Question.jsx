import React from 'react';
import QuestionHelpfulAddAnswer from './QuestionHelpfulAddAnswer.jsx';
import Answer from './Answer.jsx';
const axios = require('axios');

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
    axios.get('/getAnswers', {params: {id: this.state.question.question_id }})
    .then((result) => {
      var currentAnswers = result.data.results;
      this.setState({answers: currentAnswers}, function() {
        this.sortAnswers();
      })
    })
    .catch(err => console.log(err))
  }

  sortAnswers () {
    var answersCopy = this.state.answers.slice();
    const sorted = answersCopy.reduce((x, element) => {
      if (element.answerer_name === 'Seller') {
        return [element, ...x]
      }
      return [...x, element]
    }, []).sort((a, b) => {
      if (!a.answerer_name === 'Seller' || !b.answerer_name === 'Seller') {
        return b.helpfulness - a.helpfulness;
      } else if (a.answerer_name === 'Seller' && b.answerer_name === 'Seller') {
        return b.helpfulness - a.helpfulness;
      }
    })
    this.setState({sortedAnswers: sorted})
  }

  render () {
    return (
      <div id="individualQuestion">
        < QuestionHelpfulAddAnswer helpfulCount={this.state.question.question_helpfulness} question={this.state.question} productId={this.props.productId} productName={this.props.productName}/>
       <h3 id="question">Q: {this.state.question.question_body}</h3>
        <div id="answer">
        < Answer answers={this.state.sortedAnswers}/>
        </div>
      </div>
    )
  }
}

export default Question;
