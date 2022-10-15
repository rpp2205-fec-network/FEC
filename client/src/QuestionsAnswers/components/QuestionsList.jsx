import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
const axios = require('axios');

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      itemsShown: 2,
      showAllItems: false,
      totalQuestions: this.props.questions.length
    }
    this.showMore = this.showMore.bind(this);
    this.collapse = this.collapse.bind(this);

  }

  showMore () {
    if (this.state.itemsShown >= this.props.questions.length) {
      this.setState({showAllItems: true})
    } else if (this.state.itemsShown < this.props.questions.length && (this.props.questions.length - this.state.itemsShown === 1 || this.props.questions.length - this.state.itemsShown === 0)) {
      this.setState({showAllItems: true})
    } else if (this.state.itemsShown < this.props.questions.length) {
      this.setState({itemsShown: this.state.itemsShown + 2})
    }
  }

  collapse () {
    this.setState({showAllItems: false, itemsShown: 2})
  }

  render () {
    if (!this.state.showAllItems && this.props.questions.length > 0) {
      return (
        <div>
          <div id="questionsViewDefault">
          {this.props.questions.slice(0, this.state.itemsShown).map(question =>
            <Question key={question.question_id} question_id={question.question_id} question={question} />
          )}
          </div>
          <div>
          {<input type="button" value="More answered questions" onClick={this.showMore}></input>}
          <input type="button" value="Add a question +"></input>
          </div>
        </div>
      )
    } else if (this.state.showAllItems) {
      return (
        <div>
          <div id="questionsViewAll">
          {this.props.questions.map(question =>
            <Question key={question.question_id} question_id={question.question_id} question={question} />
          )}
          </div>

          <div>
          <input type="button" value="Show Less" onClick={this.collapse}></input>
          <input type="button" value="Add a question +"></input>
          </div>
        </div>
      )
    } else if (this.props.questions.length === 0) {
      return (
        <div id="questionsView">
        <input type="button" value="Add a question +"></input>
      </div>
      )
    }
  }
}

export default QuestionsList;