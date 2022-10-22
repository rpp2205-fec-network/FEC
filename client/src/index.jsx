import React from "react";
import {createRoot} from 'react-dom/client';
import QuestionsAnswers from './QuestionsAnswers/Questions&Answers.jsx';
import ProductOverview from './Product Overview/productOverview.jsx'
import Reviews from './Reviews/ReviewIndex.jsx';
import Lists from './RelatedProducts/Lists.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product_id: 71701
    }
  }

render() {
  return (
    <div>
    {/* <ProductOverview product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
    <Lists product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
    <QuestionsAnswers product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/> */}
    <Reviews product_id={this.state.product_id}/>
    </div>
  )
}
}

createRoot(document.getElementById('root')).render(<App />)