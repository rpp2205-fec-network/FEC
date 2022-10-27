import React from "react";
import {createRoot} from 'react-dom/client';
import QuestionsAnswers from './QuestionsAnswers/Questions&Answers.jsx';
import ProductOverview from './Product Overview/productOverview.jsx'
import Reviews from './Reviews/ReviewIndex.jsx';
import Lists from './RelatedProducts/Lists.jsx';
import axios from "axios";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product_id: 71717
    }
    this.clickTracking = this.clickTracking.bind(this);
  }

clickTracking(e, widgetName) {
  var tracking = {
    element: e.target.outerHTML,
    widget: widgetName,
    time: e.timeStamp.toString()
  }
  console.log('eeeeee', e, this)
  axios.post('/interactions', tracking)
  .then((data) => {
    console.log('successfully tracked!', data.data)
  })
  .catch((err)=> {
    console.log('error tracking', err)
  })
}

render() {
  return (
    <div>
    <ProductOverview product_id={this.state.product_id} clickTracking={this.clickTracking}/> <br/><br/><hr/><br/><br/>
    <Lists product_id={this.state.product_id} clickTracking={this.clickTracking}/> <br/><br/><hr/><br/><br/>
    <QuestionsAnswers product_id={this.state.product_id} clickTracking={this.clickTracking}/> <br/><br/><hr/><br/><br/>
    <Reviews product_id={this.state.product_id} clickTracking={this.clickTracking}/>
    </div>
  )
}
}

createRoot(document.getElementById('root')).render(<App />)