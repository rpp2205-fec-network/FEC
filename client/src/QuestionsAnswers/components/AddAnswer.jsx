import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
const axios = require('axios');

const AddAnswer = ({show, onClose, question, productId}) => {
  const [modal, setModal] = useState(show);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [cloudImages, setCloudImages] = useState([]);

  useEffect(() => {
    if (images.length < 1 || images.length > 5) return;
    var currentImg = images[images.length-1]
    setImageURLs([...imageURLs, window.URL.createObjectURL(new Blob(currentImg, {type: "image/jpeg"}))]);
    // Now convert local urls to cloudinary urls
    const cloudImgs = [];
    images.forEach((img) => {
      const cld = new Cloudinary({
        cloud: {
          cloudName: 'atelier'
        }
      });
      const cloudImage = cld.image(img[0].name);
      const url = cloudImage.toURL();
      console.log(url);
      cloudImgs.push(url)
    })
    setCloudImages(cloudImgs);
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
        {/* <h3>{Product Name will go here}</h3> */}
        <h4>{question.question_body}</h4>

        <div><label className="youranswer"> Your Answer * </label></div>
          <textarea type="text" maxLength="1000" required rows={10} cols={50} onChange={(e) => handleChange(e, 'body')}/>

        <div><label className="yournickname"> What is your nickname? * </label></div>
          <input type="text" maxLength="60" placeholder="Example: jack543!" required onChange={(e) => handleChange(e, 'name')}/>
          <div><small> For privacy reasons, do not use your full name or email address</small></div>

        <div><label className="youremail"> What is your email? * </label></div>
          <input type="email" maxLength="60" placeholder="Example: jack@email.com" required onChange={(e) => handleChange(e, 'email')}/>
        <div><small> For authentication reasons, you will not be emailed </small></div>

        <div className="uploadImages">{imageURLs.map((imageSrc, index) => <img className="uploadImagePreview" key={index} src={imageSrc} onError={handleError}/>)}</div>
        {images.length < 5 ? <input type="file" accept="image/*" onChange={(e) => onImageChange(e)}/> : null }

        <input type="button" value="Submit"onClick={handleSubmit}></input>
        <input type="button" value="Close" onClick={(e) => handleClose(e)}></input>
        </div>
      </form>
    )
  }
}

export default AddAnswer;