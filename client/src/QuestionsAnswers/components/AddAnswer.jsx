import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
const axios = require('axios');

const AddAnswer = ({show, onClose, question, productId, productName}) => {
  const [modal, setModal] = useState(show);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [cloudImages, setCloudImages] = useState([]);

  useEffect(() => {
    if (images.length < 1 || images.length > 5) return;
    var img = images[images.length-1]
    setImageURLs([...imageURLs, window.URL.createObjectURL(new Blob(img, {type: "image/jpeg"}))]);

      const formData = new FormData();
      formData.append('file', img[0]);
      formData.append('upload_preset', 'pdcwltrn');
      console.log(formData);

      axios.post('https://api.cloudinary.com/v1_1/atelierfec/image/upload', formData)
      .then((response) => {
        const url = response.data.url;
        setCloudImages(prevState => [...prevState, url])
      })
  }, [images])

  const onImageChange = (e) => {
    setImages(prevState => [...prevState, e.target.files])
  }

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
      photos: cloudImages
    };
    let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailFormat.test(email) || email === '') {
      alert('You must enter the following: email')
    } else if (name === '') {
      alert('You must enter the following: display name')
    } else if (body === '') {
      alert('You must enter the following: answer')
    } else {
      axios.post('/postAnswer', {question_id, answer});
    }
  }

  const handleError = () => {
    alert('Please select a valid image')
  }

  if (!show) {
    return null;
  } else {
    return (
      <form className="answerModal">
        <div className="answerModalContent">
        <h2>Submit your Answer</h2>
        <h3>{productName}</h3>
        <h4>{question.question_body}</h4>

        <div className="youranswer">
          <div><label> Your Answer * </label></div>
          <textarea type="text" maxLength="1000" required rows={10} cols={50} onChange={(e) => handleChange(e, 'body')}/> <br></br>
        </div>

        <div className="yournickname">
          <div><label> What is your nickname? * </label></div>
          <textarea type="text" maxLength="60" placeholder="Example: jack543!" required rows={1} cols={50} onChange={(e) => handleChange(e, 'name')}/>
          <div><label className="labels"> For privacy reasons, do not use your full name or email address</label></div>
        </div>

        <div className="youremail">
          <div><label> What is your email? * </label></div>
          <textarea type="email" maxLength="60" placeholder="Example: jack@email.com" required rows={1} cols={50} onChange={(e) => handleChange(e, 'email')}/>
          <div><label className="labels"> For authentication reasons, you will not be emailed </label></div>
        </div>

        <div className="uploadImages">{imageURLs.map((imageSrc, index) => <img className="uploadImagePreview" key={index} src={imageSrc} onError={handleError}/>)}</div>
        {images.length < 5 ? <input type="file" accept="image/*" onChange={(e) => onImageChange(e)}/> : null }

        <button type="Submit" className="answerSubmit"onClick={handleSubmit}>Submit</button>
        <button type="Submit" className="QAbutton" onClick={(e) => handleClose(e)}>Close</button>
        </div>
      </form>
    )
  }
}

export default AddAnswer;