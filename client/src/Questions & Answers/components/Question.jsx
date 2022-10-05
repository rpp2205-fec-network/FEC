import React from 'react';
import AddAnswer from './AddAnswer.jsx';
import Answer from './Answer.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question
    }
  }

  render () {
    return (
      <div>
        {this.state.question.question_body}
      < AddAnswer />
      < Answer />
      </div>
    )
  }
}

export default Question;
