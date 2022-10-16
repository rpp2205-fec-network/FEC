import React from 'react';
import { useState } from 'react';
const axios = require('axios');

const AnswerHelpfulAndReport = ({answer}) => {
  const [helpful, setHelpful] = useState(answer.helpfulness);
  const [report, setReport] = useState(false);
  const [disable, setDisable] = useState(false);

  const wasHelpful = (e) => {
    e.preventDefault();
    setHelpful(answer.helpfulness += 1)
    setDisable(true);
    axios.put('/putAnswerHelpful', {id: answer.answer_id})
    .then((response) => {
      console.log('+1 helpful')
    })
    .catch(err => console.log('could not be helpful'))
  }

  const reportAnswer = (e) => {
    e.preventDefault();
    setReport(true);
    axios.put('/reportAnswer', {id: answer.answer_id})
  }

  return (
    <div className="answerHelpfulAndReport">
      | Helpful? <button type="submit" disabled={disable} onClick={wasHelpful}>Yes</button> ({answer.helpfulness})
      | {!report ? <button type="submit" onClick={reportAnswer}>Report</button> : <span>Reported</span>}
    </div>
  )
}

export default AnswerHelpfulAndReport;