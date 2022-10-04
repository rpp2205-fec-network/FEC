import React from 'react';
import ReactDOM from 'react-dom';
import SearchQuestions from './components/SearchQuestions.jsx';
import QuestionsList from './components/QuestionsList.jsx';
import AddQuestion from './components/AddQuestion.jsx';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div>
      <div>Questions and Answers</div>
      < SearchQuestions />
      < QuestionsList />
      < AddQuestion />
      </div>
    )
  }
}

export default QuestionsAnswers;