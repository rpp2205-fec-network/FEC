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

        <div className="yourquestion">
          <div><label> Your Question * </label></div>
          <textarea type="text" maxLength="1000" required rows={10} cols={50} onChange={(e) => handleChange(e, 'body')}/>
        </div>

        <div className="yournickname">
          <div><label> What is your nickname? * </label></div>
          <textarea type="text" maxLength="60" placeholder="Example: jackson11!" required rows={1} cols={50} onChange={(e) => handleChange(e, 'name')}/>
          <div><label className="labels"> For privacy reasons, do not use your full name or email address</label></div>
        </div>

        <div className="youremail">
        <div><label> What is your email? * </label></div>
          <textarea type="email" maxLength="60" placeholder="Why did you like the product or not?" rows={1} cols={50} required onChange={(e) => handleChange(e, 'email')}/>
          <div><label className="labels"> For authentication reasons, you will not be emailed </label></div>
        </div>

        <div className="modalCloseSubmit">
          <button type="Submit" className="questionSubmit" onClick={handleSubmit}>Submit</button>
          <button type="Submit" className="QAbutton" onClick={(e) => handleClose(e)}>Close</button>
        </div>

        </div>
      </form>
    )
  }
}

export default AddQuestion;
