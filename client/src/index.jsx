import React from "react";
import ReactDOM from 'react-dom';
import QuestionsAnswers from './Questions & Answers/Questions&Answers.jsx';
import ProductOverview from './Product Overview/productOverview.jsx'
import Reviews from './Reviews/ReviewIndex.jsx';
import Lists from './RelatedProducts/Lists.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }


render() {
  return (
    <div>
    {/* <ProductOverview /> <br/><br/><hr/><br/><br/>
    <Lists /> <br/><br/><hr/><br/><br/>
    <QuestionsAnswers /> <br/><br/><hr/><br/><br/> */}
    <Reviews /> <br/><br/><hr/><br/><br/>

  </div>
  )
}
}

ReactDOM.render(<App />, document.getElementById('root'))
