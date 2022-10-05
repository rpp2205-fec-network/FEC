import React from "react";
import ReactDOM from 'react-dom';
import List from './components/List.jsx';

export default class ReviewIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
}

render() {
  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      <List />
    </div>
  )
}
}