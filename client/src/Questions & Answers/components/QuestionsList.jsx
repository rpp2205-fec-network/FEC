import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
      <div>Questions list will go here</div>
      < Question />
      <div>More questions button</div>
      </div>
    )
  }
}

export default QuestionsList;