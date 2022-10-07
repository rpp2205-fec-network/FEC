import React from 'react';

const Answer = (props) => (
  <div>{props.answers.map((answer, index) => {
    if (index === 0) {
      return <li key={answer.id} target="_blank"> A: {answer.body}
      <div>by {answer.answerer_name}, {answer.date} | Helpful? <input type="button" value="Yes"/>({answer.helpfulness}) | <input type="button" value="Report"/></div>
      </li>
    } else {
      return <li key={answer.id} target="_blank">  {answer.body}
      <div>by {answer.answerer_name}, {answer.date} | Helpful? <input type="button" value="Yes"/>({answer.helpfulness}) | <input type="button" value="Report"/></div>
      </li>
    }
  })}</div>
)

export default Answer;
