import React from 'react';
import AddAnswer from './AddAnswer.jsx';
import Answer from './Answer.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      answers: []
    }
    this.getAnswersList = this.getAnswersList.bind(this);
  }

  componentDidMount () {
    this.getAnswersList()
  }

  getAnswersList() {
    var answersList = Object.values(this.state.question.answers)
    console.log('ANSSERS VALUES', answersList)
    this.setState({answers: answersList})
  }

  render () {
    return (
      <div>
       Q: {this.state.question.question_body}
        < AddAnswer />
        < Answer answers={this.state.answers}/>
      </div>
    )
  }
}

export default Question;
