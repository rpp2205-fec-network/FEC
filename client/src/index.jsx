import React from "react";
import ReactDOM from 'react-dom';
import QuestionsAnswers from './Questions & Answers/Questions&Answers.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
}

render() {
  return (
    <div>
    <div>Hello World</div>
    <div>
      <QuestionsAnswers />
    </div>
    </div>
  )
}
}

ReactDOM.render(<App />, document.getElementById('root'))
