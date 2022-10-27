import React from 'react';
import ReactDOM from 'react-dom';
import SearchQuestions from './components/SearchQuestions.jsx';
import QuestionsList from './components/QuestionsList.jsx';
import ErrorBoundary from './QuestionsAnswersErrorBoundary.jsx';
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
      <div id="QAwidget" onClick={(e) => this.props.clickTracking(e, 'QuestionAnswers')}>
      <div>
        <h3>Questions & Answers</h3> <br/>
        </div>
        <SearchQuestions />
        <div>
        <ErrorBoundary>
        <QuestionsList questions={this.state.sortedQuestions} product_id={this.state.product_id}/>
        </ErrorBoundary>
        </div>
      </div>
    )
  }
}

export default QuestionsAnswers;