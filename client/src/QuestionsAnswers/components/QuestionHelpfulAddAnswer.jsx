import React from 'react';
import { useState } from 'react';
import AddAnswer from './AddAnswer.jsx';
const axios = require('axios');

const QuestionHelpfulAddAnswer = ({question, helpfulCount, productId}) => {
  const [disable, setDisable] = useState(false);
  const [helpful, setHelpful] = useState(question.question_helpfulness);
  const [show, setShow] = useState(false);

  const wasHelpful = (e) => {
    e.preventDefault();
    setHelpful(question.question_helpfulness += 1);
    setDisable(true);
    axios.put('/putQuestionHelpful', {id: question.question_id})
    .then((response) => {
      console.log('+1 helpful')
    })
    .catch(err => console.log('could not be helpful'))
  }

  const showModal = (e) => {
    setShow(!show)
  };

  return (
    <div id="addAnswer">
    Helpful? <button type="Submit" className="QAbutton" disabled={disable} onClick={wasHelpful}>Yes</button> ({helpful}) <span className="bar">|</span>
    <button type="Submit" className="QAbutton" onClick={showModal}>Add answer </button>
    <AddAnswer show={show} onClose={showModal} question={question} productId={productId}/>
  </div>
  )
}

export default QuestionHelpfulAddAnswer;