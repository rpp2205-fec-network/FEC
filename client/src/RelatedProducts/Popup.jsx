import React from 'react';

export default function Popup(){
  console.log('here')
  return(
  <div>
    <h4>Popup - GeeksforGeeks</h4>
    <Popup trigger={<button> Click to open popup </button>}
     position="right center">
      <div>GeeksforGeeks</div>
      <button>Click here</button>
    </Popup>
  </div>
  )
};