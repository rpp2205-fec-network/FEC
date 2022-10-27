// import React from "react";
// import ReactDOM from "react-dom";
// import Index from "./index.jsx";
// import {createRoot} from 'react-dom/client';
// // createRoot(document.getElementById('root')).render(<App />)
// ReactDOM.render(<Index />, document.getElementById("root"));

import React from "react";
import {createRoot} from 'react-dom/client';
import QuestionsAnswers from './QuestionsAnswers/Questions&Answers.jsx';
import ProductOverview from './Product Overview/productOverview.jsx'
import Reviews from './Reviews/ReviewIndex.jsx';
import Lists from './RelatedProducts/Lists.jsx';
import {BrowserRouter as Router, Route,Routes, Switch} from 'react-router-dom';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.changeProduct = this.changeProduct.bind(this);
    this.clickTracking = this.clickTracking.bind(this);
    this.state = {
      product_id: 71701,
      textId:''
    }
  }


  changeProduct(e) {
    let text = e.toString()
    console.log('here')
    // this.setState({
    //   product_id: e,
    //   textId: text
    // }, () => {console.log(this.state)})

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
    <Router>
        <Routes>
            <Route path={`/`}
            element = {
              <>
              <ProductOverview product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
              <Lists product_id={this.state.product_id} changeProduct={this.changeProduct}/> <br/><br/><hr/><br/><br/>
              <QuestionsAnswers product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
              <Reviews product_id={this.state.product_id}/>
              </>
            }
            />

        </Routes>
    </Router>
  )
}
}