import React from 'react';
import { useState } from 'react';
const axios = require('axios');

const AddAnswer = ({show, onClose, question, productId}) => {
  const [modal, setModal] = useState(show);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = (e) => {
    e.preventDefault();
    onClose(e);
  }

  const handleChange = (e, field) => {
    if (field === 'body') {
      setBody(e.target.value)
    } else if (field === 'name') {
      setName(e.target.value)
    } else if (field === 'email') {
      setEmail(e.target.value)
    }
  }

  const handleSubmit = () => {
    var question_id = question.question_id;
    var answer = {
      body: body,
      name: name,
      email: email,
      photos: []
    };
    axios.post('/postAnswer', {question_id, answer});
  }

  if (!show) {
    return null;
  } else {
    return (
      <form className="answerModal">
        <h2>Submit your Answer</h2>
        {/* <h3>{Product Name will go here}</h3> */}
        <h4>{question.question_body}</h4>

        <div><label className="youranswer"> Your Answer * </label></div>
          <textarea type="text" maxLength="1000" required rows={10} cols={50} onChange={(e) => handleChange(e, 'body')}/>

        <div><label className="yournickname"> What is your nickname? * </label></div>
          <input type="text" maxLength="60" placeholder="Example: jack543!" required onChange={(e) => handleChange(e, 'name')}/>
          <div><small> For privacy reasons, do not use your full name or email address</small></div>

        <div><label className="youremail"> What is your email? * </label></div>
          <input type="text" maxLength="60" placeholder="Example: jack@email.com" required onChange={(e) => handleChange(e, 'email')}/>
        <div><small> For authentication reasons, you will not be emailed </small></div>

        {/* Option to upload photos will go here */}

        <input type="button" value="Submit"onClick={handleSubmit}></input>
        <button onClick={(e) => handleClose(e)}>Close</button>
      </form>
    )
  }
}

export default AddAnswer;