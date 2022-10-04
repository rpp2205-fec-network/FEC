import React from "react";
import ReactDOM from 'react-dom';
import QuestionsAnswers from './Questions & Answers/Questions&Answers.jsx';
import ProductOverview from './Product Overview/productOverview.jsx'
import Lists from './RelatedProducts/Lists.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div>
      Hello World
      <ProductOverview />
      < QuestionsAnswers />
      <Lists/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
