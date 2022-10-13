import React from 'react';

const AddAnswer = (props) => (
  <div id="addAnswer">
    <input type="button" value="Add answer"></input>
    | Helpful? ({props.helpfulCount})<input type="button" value="Yes"/>
  </div>
)

export default AddAnswer;