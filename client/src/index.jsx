import React from "react";
import ReactDOM from 'react-dom';
import ReviewIndex from './Reviews/ReviewIndex.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
}

render() {
  return (
    <div>
      Hello World
      <ReviewIndex />
    </div>
  )
}
}

ReactDOM.render(<App />, document.getElementById('root'))
