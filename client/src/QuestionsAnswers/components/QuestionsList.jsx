import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';
const axios = require('axios');

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      itemsShown: 2,
      showAllItems: false,
      totalQuestions: this.props.questions.length,

    }
    this.showMore = this.showMore.bind(this);
    this.collapse = this.collapse.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  showMore () {
    if (this.state.itemsShown >= this.props.questions.length) {
      this.setState({showAllItems: true})
    } else if (this.state.itemsShown < this.props.questions.length && (this.props.questions.length - this.state.itemsShown === 1
      || this.props.questions.length - this.state.itemsShown === 0
      || this.props.questions.length - this.state.itemsShown === 2 )) {
      this.setState({showAllItems: true})
    } else if (this.state.itemsShown < this.props.questions.length) {
      this.setState({itemsShown: this.state.itemsShown + 2})
    }
  }

  collapse () {
    this.setState({showAllItems: false, itemsShown: 2})
  }

  showModal () {
    this.setState({showQuestionModal: !this.state.showQuestionModal})
  }

  render () {
    if (!this.state.showAllItems && this.props.questions.length > 0) {
      return (
        <div>
          <div id="questionsViewDefault">
          {this.props.questions.slice(0, this.state.itemsShown).map(question =>
            <Question key={question.question_id} question_id={question.question_id} question={question} productId={this.props.product_id}/>
          )}
          </div>
          <div>
          {<input type="button" value="More Answered Questions" className="moreAnsweredQuestions" onClick={this.showMore}></input>}
          <input type="button" value="Add A Question +" className="addQuestionButton" onClick={this.showModal}></input>
          < AddQuestion show={this.state.showQuestionModal} onClose={this.showModal} product_id={this.props.product_id}/>
          </div>
        </div>
      )
    } else if (this.state.showAllItems) {
      return (
        <div>
          <div id="questionsViewAll">
          {this.props.questions.map(question =>
            <Question key={question.question_id} question_id={question.question_id} question={question} productId={this.props.product_id}/>
          )}
          </div>

          <div>
          <input type="button" value="Show Less" className="moreAnsweredQuestions" onClick={this.collapse}></input>
          <input type="button" value="Add A Question +" className="addQuestionButton" onClick={this.showModal}></input>
          < AddQuestion show={this.state.showQuestionModal} onClose={this.showModal} product_id={this.props.product_id}/>
          </div>
        </div>
      )
    } else if (this.props.questions.length === 0) {
      return (
        <div id="questionsView">
        <input type="button" value="Add A Question +"></input>
      </div>
      )
    }
  }
}

export default QuestionsList;