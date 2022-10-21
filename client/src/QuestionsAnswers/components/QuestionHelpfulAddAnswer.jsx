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
    <button type="Submit" onClick={showModal}>Add answer </button>
    <AddAnswer show={show} onClose={showModal} question={question} productId={productId}/>
    | Helpful? ({helpful})<button type="Submit" disabled={disable} onClick={wasHelpful}>Yes</button>
  </div>
  )
}

export default QuestionHelpfulAddAnswer;