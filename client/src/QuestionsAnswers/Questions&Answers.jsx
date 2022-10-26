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
      showQuestionModal: false,
      searchText: '',
      searchedQuestions: []
    };
    this.sortQuestions = this.sortQuestions.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.searchQuestions = this.searchQuestions.bind(this);
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

  searchHandler = (e) => {
    var query = e.target.value.toLowerCase();
    this.setState({searchText: query});
    var posts = this.searchQuestions(this.state.sortedQuestions, query);
    console.log(posts)
    this.setState({searchedQuestions: posts})
  };

  searchQuestions = (questions, query) => {
    //if no input the return the original
    if (query === '') {
      return questions;
    }

    return questions.filter((question) => {
      var body = question.question_body;
      var postName = body.toLowerCase();
      return postName.includes(query);
    });
  }

  render () {
    return (
      <div id="QAwidget">
      <div>
        <h3>Questions & Answers</h3> <br/>
        </div>
          <div id="searchquestions">
          <textarea type="Search" placeholder="Have a question? Search for answers..." onChange={this.searchHandler} rows={1} cols={100}></textarea>
          </div>
        <div>
        <ErrorBoundary>
        <QuestionsList questions={this.state.searchedQuestions.length >= 1 ? this.state.searchedQuestions : this.state.sortedQuestions} product_id={this.state.product_id}/>
        </ErrorBoundary>
        </div>
      </div>
    )
  }
}

export default QuestionsAnswers;