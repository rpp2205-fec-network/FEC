import React from 'react';
import { useState, useEffect} from 'react';
const axios = require('axios');

const AddQuestion = ({show, onClose, product_id}) => {
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
    var question = {
      body: body,
      name: name,
      email: email,
      product_id: Number(product_id)
    };
    let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailFormat.test(email) || email === '') {
      alert('You must enter the following: email')
    } else if (name === '') {
      alert('You must enter the following: display name')
    } else if (body === '') {
      alert('You must enter the following: answer')
    } else {
      axios.post('/postQuestion', {question});
    }
  }

  if (!show) {
    return null;
  } else {
    return (
      <form className="questionModal">
        <div className="questionModalContent">
        <h2>Ask Your Question</h2>
        {/* <h3>About the {product_name}</h3> */}

        <div><label className="yourquestion"> Your Question * </label></div>
          <textarea type="text" maxLength="1000" required rows={10} cols={50} onChange={(e) => handleChange(e, 'body')}/>

        <div><label className="yournickname"> What is your nickname? * </label></div>
          <input type="text" maxLength="60" placeholder="Example: jackson11!" required onChange={(e) => handleChange(e, 'name')}/>
          <div><small> For privacy reasons, do not use your full name or email address</small></div>

        <div><label className="youremail"> What is your email? * </label></div>
          <input type="email" maxLength="60" placeholder="Why did you like the product or not?" required onChange={(e) => handleChange(e, 'email')}/>
        <div><small> For authentication reasons, you will not be emailed </small></div>

        <button type="Submit" className="questionSubmit" onClick={handleSubmit}>Submit</button>
        <button type="Submit" className="QAbutton" onClick={(e) => handleClose(e)}>Close</button>
        </div>
      </form>
    )
  }
}

export default AddQuestion;
