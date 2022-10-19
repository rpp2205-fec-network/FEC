import React from 'react';
import { useState } from 'react';
const axios = require('axios');

const AddAnswer = ({show, onClose, question, productId}) => {
  const [modal, setModal] = useState(show)

  const handleClose = (e) => {
    e.preventDefault();
    onClose(e);
  }

  if (!show) {
    return null;
  } else {
    return (
      <div className="answerModal">
        <h2>Submit your Answer</h2>
        {/* <h3>{Product Name will go here}</h3> */}
        <h4>{question.question_body}</h4>
        <button onClick={(e) => handleClose(e)}>Close</button>
      </div>
    )
  }
}

export default AddAnswer;