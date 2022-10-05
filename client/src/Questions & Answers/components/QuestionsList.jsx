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
    }
  }

  componentDidMount() {
    axios.get('/getQuestions')
    .then((questions) => {
      console.log('Current product questions data', questions.data)
      this.setState({
        product_id: questions.data.product_id,
        questions: questions.data.results
      })
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
      <div>Questions list will go here</div>
        <div>
        {this.state.questions.map(question =>
          <Question key={question.question_id} question_id={question.question_id} question={question} />
        )}
        </div>
      <div>More questions button</div>
      </div>
    )
  }
}

export default QuestionsList;