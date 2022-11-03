import React from "react";
import {HashRouter as Router, Route,Routes, Switch} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import QuestionsAnswers from './QuestionsAnswers/Questions&Answers.jsx';
import ProductOverview from './Product Overview/productOverview.jsx'
import Reviews from './Reviews/ReviewIndex.jsx';
import Lists from './RelatedProducts/Lists.jsx';
import axios from "axios";

class App extends React.Component {
  constructor(props){
    super(props);
    this.changeProduct = this.changeProduct.bind(this);
    this.clickTracking = this.clickTracking.bind(this);
    this.state = {
      product_id: 71717
    }
  }

  changeProduct(id) {
    this.setState({
      product_id: id
    })

  }

clickTracking(e, widgetName) {
  var tracking = {
    element: e.target.outerHTML,
    widget: widgetName,
    time: e.timeStamp.toString()
  }
  axios.post('/interactions', tracking)
  .then((data) => {
    // console.log('successfully tracked!', data.data)
  })
  .catch((err)=> {
    console.log('error tracking', err)
  })
}


render() {
  return (
    <Router>
        <Routes>
            <Route path={`/*`}
            element = {
              <>
              <ProductOverview product_id={this.state.product_id} clickTracking={this.clickTracking}/> <br/><br/><hr/><br/><br/>
              <Lists product_id={this.state.product_id} changeProduct={this.changeProduct} clickTracking={this.clickTracking}/> <br/><br/><hr/><br/><br/>
              <QuestionsAnswers product_id={this.state.product_id.toString()} clickTracking={this.clickTracking}/> <br/><br/><hr/><br/><br/>
              <Reviews product_id={this.state.product_id} clickTracking={this.clickTracking}/>
              </>
            }
            />

        </Routes>
    </Router>
  )
}
}

createRoot(document.getElementById('root')).render(<App />)
//ReactDOM.render(<App />, document.getElementById("root"));