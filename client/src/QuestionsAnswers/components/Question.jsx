import React from 'react';
import AddAnswer from './AddAnswer.jsx';
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
        < AddAnswer helpfulCount={this.state.question.question_helpfulness} question={this.state.question}/>
       <h3 id="question">Q: {this.state.question.question_body}</h3>
        <div id="answer"> <h3>A: </h3>
        < Answer answers={this.state.sortedAnswers}/>
        </div>
      </div>
    )
  }
}

export default Question;
