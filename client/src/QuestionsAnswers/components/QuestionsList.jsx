import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
const axios = require('axios');

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      showAllItems: false
    }
    this.showMore = this.showMore.bind(this);
  }

  showMore () {
    this.state.showAllItems === false ? this.setState({showAllItems: true}) : this.setState({showAllItems: false})
  }

  render () {
    if (this.state.showAllItems === false && this.props.questions.length > 0) {
      return (
        <div id="questionsViewDefault">
          <div>
          {this.props.questions.slice(0, 2).map(question =>
            <Question key={question.question_id} question_id={question.question_id} question={question} />
          )}
          </div>
          {this.props.questions.length > 2 ?<input type="button" value="More answered questions" onClick={this.showMore}></input> : null}
          <input type="button" value="Add a question +"></input>
        </div>
      )
    } else if (this.state.showAllItems === true) {
      return (
        <div>
          <div id="questionsViewAll">
          {this.props.questions.map(question =>
            <Question key={question.question_id} question_id={question.question_id} question={question} />
          )}
          </div>

          <div>
          <input type="button" value="Show Less" onClick={this.showMore}></input>
          <input type="button" value="Add a question +"></input>
          </div>
        </div>
      )
    } else if (this.state.showAllItems === false && this.props.questions.length === 0) {
      return (
        <div id="questionsView">
        <input type="button" value="Add a question +"></input>
      </div>
      )
    }
  }
}

export default QuestionsList;