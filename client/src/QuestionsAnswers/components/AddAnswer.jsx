import React from 'react';
import { useState } from 'react';
const axios = require('axios');

const AddAnswer = ({question, helpfulCount}) => {
  const [disable, setDisable] = useState(false);
  const [helpful, setHelpful] = useState(question.question_helpfulness);

  const wasHelpful = (e) => {
    e.preventDefault();
    setHelpful(question.question_helpfulness += 1);
    setDisable(true);
    axios.put('/putQuestionHelpful', {id: question.question_id})
    .then((response) => {
      console.log('+1 helpful')
      //setHelpful(question.question_helpfulness += 1);
    })
    .catch(err => console.log('could not be helpful'))
  }

  return (
    <div id="addAnswer">
    <input type="button" value="Add answer"></input>
    | Helpful? ({helpful})<button type="Submit" disabled={disable} onClick={wasHelpful}>Yes</button>
  </div>
  )
  }

export default AddAnswer;