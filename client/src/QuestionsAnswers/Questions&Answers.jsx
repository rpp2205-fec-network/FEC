import React from 'react';
import ReactDOM from 'react-dom';
import SearchQuestions from './components/SearchQuestions.jsx';
import QuestionsList from './components/QuestionsList.jsx';
const axios = require('axios')

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      questions: [],
      sortedQuestions: [],
      showQuestionModal: false
    };
    this.sortQuestions = this.sortQuestions.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions () {
    axios.get('/getQuestions')
    .then((questions) => {
      //console.log('Current product questions data', questions.data)
      this.setState({
        product_id: questions.data.product_id,
        questions: questions.data.results,
      }, function () {
        this.sortQuestions();
      })
    })
    .catch(err => console.log(err));
  }

  sortQuestions() {
    var questionsCopy = this.state.questions.slice();
    questionsCopy.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
    this.setState({sortedQuestions: questionsCopy})
  }

  render () {
    return (
      <div id="QAwidget">
      <div>
        <h3>Questions & Answers</h3> <br/>
        </div>
      < SearchQuestions />
      < QuestionsList questions={this.state.sortedQuestions} productId={this.state.product_id}/>
      </div>
    )
  }
}

export default QuestionsAnswers;