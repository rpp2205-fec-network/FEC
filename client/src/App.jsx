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
import {HashRouter as Router, Route,Routes, Switch, useNavigate, useParams} from 'react-router-dom';
// import Component from 'react-router-dom'

// function useParams(c) {
//   return props => <Component {...props} params={useParams()}/>
// }

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.changeProduct = this.changeProduct.bind(this);
    this.clickTracking = this.clickTracking.bind(this);
    this.state = {
      product_id: 71710,
      textId:''
    }
  }
  // UNSAFE_componentWillReceiveProps() {
  //   // You don't have to do this check first, but it can help prevent an unneeded render
  //   console.log(this.props.product_id, this.state.product_id,'kkkkk')
  //   if (this.props.product_id !== this.state.product_id) {

  //     this.setState({ currentItem: this.props.product_id }, () => console.log(this.state, '55555nd thingy'));
  //   }
  // }



  changeProduct(id) {
    let text = id.toString()
    this.setState({
      product_id: id,
      textId: text
    }, () => console.log(this.state, 'updated state'))

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

  // useparems for React Router
  // {Link} from react-router-dom
  navigate() {
    useNavigate()
  }
  componentDidUpdate() {
    //console.log(window.location.hash, 'this is window location', this.state)
  }

render() {
  // return (
  //   <>
  //   <div>This is the product Id: {this.state.product_id}</div>
  //     <ProductOverview product_id={this.state.product_id} /> <br /><br /><hr /><br /><br />
  //     <Lists product_id={this.state.product_id} changeProduct={this.changeProduct} /> <br /><br /><hr /><br /><br />
  //     <QuestionsAnswers product_id={this.state.product_id} /> <br /><br /><hr /><br /><br />
  //     {/* <Reviews product_id={this.state.product_id}/> */}
  //   </>
  // )
  ///////
  return (

    <Router>
        <Routes>
            <Route exact path='/'
            element = {
              <div>
              <ProductOverview product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
              <Lists product_id={this.state.product_id} changeProduct={this.changeProduct}/> <br/><br/><hr/><br/><br/>
              <QuestionsAnswers product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
              {/* <Reviews product_id={this.state.product_id}/> */}
              </div>
            }
            />


              <Route exact path='/link/72380'
              element = {
              <>
              {/* <div>Product Id should be: {this.state.product_id}</div> */}
              <ProductOverview product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
              <Lists product_id={this.state.product_id} changeProduct={this.changeProduct}/> <br/><br/><hr/><br/><br/>
              <QuestionsAnswers product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
              {/* <Reviews product_id={this.state.product_id}/> */}
              </>
            }
            />

              <Route exact path='/link/72375'
              element = {
              <>
              {/* <div>Product Id should be: {this.state.product_id}</div> */}
              <ProductOverview product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
              <Lists product_id={this.state.product_id} changeProduct={this.changeProduct}/> <br/><br/><hr/><br/><br/>
              <QuestionsAnswers product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
              {/* <Reviews product_id={this.state.product_id}/> */}
              </>
            }
            />

              <Route exact path='/link/*'
              element = {
              <>
              {/* <div>Product Id should be: {this.state.product_id}</div> */}
              <ProductOverview product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
              <Lists product_id={this.state.product_id} changeProduct={this.changeProduct}/> <br/><br/><hr/><br/><br/>
              <QuestionsAnswers product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
              {/* <Reviews product_id={this.state.product_id}/> */}
              </>
            }
            />


        </Routes>
    </Router>
  )
}
}