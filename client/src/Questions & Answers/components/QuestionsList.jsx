import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
const axios = require('axios')

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      questions: [],
      sortedQuestions: []
    }
    this.sortQuestions = this.sortQuestions.bind(this);
  }

  componentDidMount() {
    axios.get('/getQuestions')
    .then((questions) => {
      console.log('Current product questions data', questions.data)
      this.setState({
        product_id: questions.data.product_id,
        questions: questions.data.results,
      })
    })
    .then((questions) => {
      this.sortQuestions()
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
      <div>
        <div>
        {this.state.sortedQuestions.map(question =>
          <Question key={question.question_id} question_id={question.question_id} question={question} />
        )}
        </div>
        <input type="button" value="More answered questions"></input>
      </div>
    )
  }
}

export default QuestionsList;