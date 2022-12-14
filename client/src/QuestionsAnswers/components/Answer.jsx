import React from 'react';
import AnswerHelpfulAndReport from './AnswerHelpfulAndReport.jsx';
import { format } from 'date-fns';
const axios = require('axios');

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulClicked: {},
      showAllItems: false
    };
    this.showCollapseAnswers = this.showCollapseAnswers.bind(this);
  }

  showCollapseAnswers (e) {
    e.preventDefault();
    this.state.showAllItems === false ? this.setState({showAllItems: true}) : this.setState({showAllItems: false})
  }

  render () {
    if (this.state.showAllItems === false) {
      return (
        <div>
          <h3 className="expandedAnswersA">A: </h3>
        <div id="answerContent"> {this.props.answers.slice(0, 2).map((answer, index) => {
          return <li key={answer.answer_id} target="_blank" id="answerText">  {answer.body}
          <div className="answerImagesArea">
          {answer.photos ? answer.photos.map((photo, index) => {
            return <div className="eachImage" key={index}><img src={photo.url} key={photo.id} className="qaPhoto" alt=""/></div>
          }) : ''}
          </div>
          <div id="answererInfo">by {answer.answerer_name === 'Seller' ? <span style={{fontWeight: 'bold'}}>{answer.answerer_name}</span> : answer.answerer_name},
          <span> </span>
          {format(new Date(answer.date), 'MMMM dd, yyyy')} <AnswerHelpfulAndReport answer={answer}/></div>
          </li>
        })} </div>
          {this.props.answers.length > 2 ?<input type="button" value="Load more answers" className="QAinputbutton" onClick={(e) => this.showCollapseAnswers(e)}/> : ''}
        </div>
      )
    } else {
      return (
        <div>
        <h3 className="expandedAnswersA">A: </h3>
        <div id="allAnswerContent"> {this.props.answers.map((answer, index) => {
          return <li key={answer.answer_id} target="_blank" id="answerText"> {answer.body}
          <div className="answerImagesArea">
          {answer.photos ? answer.photos.map((photo, index) => {
            return <div className="eachImage" key={index}><img src={photo.url} key={photo.id} className="qaPhoto" alt=""/></div>
          }) : ''}
          </div>
          <div id="answererInfo">by {answer.answerer_name === 'Seller' ? <span style={{fontWeight: 'bold'}}>{answer.answerer_name}</span> : answer.answerer_name},
          <span> </span>
          {format(new Date(answer.date), 'MMMM dd, yyyy')} <AnswerHelpfulAndReport answer={answer}/></div>
          </li>
        })} </div>
          <input type="button" value="Collapse answers" className="QAinputbutton" onClick={(e) => this.showCollapseAnswers(e)}/>
        </div>
      )
    }
  }
}

export default Answer;
