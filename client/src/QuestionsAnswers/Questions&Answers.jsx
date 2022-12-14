import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsList from './components/QuestionsList.jsx';
import ErrorBoundary from './QuestionsAnswersErrorBoundary.jsx';
const axios = require('axios')

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.product_id,
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
    this.getQuestions(this.state.product_id);
  }

  ///////////Kens add////////////////
  componentDidUpdate(prevProps) {
    //console.log('questions and answers', prevProps.product_id, this.props.product_id,this.state.questions)
    if (prevProps.product_id !== this.props.product_id) {
      this.setState({
        product_id: this.props.product_id
      }, () => {this.getQuestions(this.state.product_id)})
    }
  }
///////////////////////////////////////


  getQuestions (product_id) {
    axios.get(`/getQuestions/${product_id}`)
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
    if (e.target.value.length >= 3) {
      var query = e.target.value.toLowerCase();
      this.setState({searchText: query});
      var posts = this.searchQuestions(this.state.sortedQuestions, query);
      console.log(posts)
      this.setState({searchedQuestions: posts})
    } else {
      this.setState({searchedQuestions: this.state.sortedQuestions})
    }
  };

  searchQuestions = (questions, query) => {
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
      <div id="QAwidget" onClick={(e) => this.props.clickTracking(e, 'QuestionAnswers')}>
      <div>
        <h3>Questions & Answers</h3> <br/>
        </div>
          <div id="searchquestions">
          <textarea type="Search" className="searchBar" placeholder="Have a question? Search for answers..." onChange={this.searchHandler} rows={1} cols={100}></textarea>
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