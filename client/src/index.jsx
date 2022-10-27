// import React from "react";
// import {createRoot} from 'react-dom/client';
// import QuestionsAnswers from './QuestionsAnswers/Questions&Answers.jsx';
// import ProductOverview from './Product Overview/productOverview.jsx'
// import Reviews from './Reviews/ReviewIndex.jsx';
// import Lists from './RelatedProducts/Lists.jsx';
// import {BrowserRouter as Router, Route,Routes, Switch} from 'react-router-dom';

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       product_id: 71701,
//       textId:''
//     }
//   }


//   changeProduct(e) {
//     let text = e.toString()
//     this.setState({
//       product_id: e,
//       textId: text
//     }, () => {console.log(this.state)})

//   }

// render() {
//   return (
//     <Router>
//         <Routes>
//             <Route path={'/' + this.state.textId}
//             element = {
//               <>
//               <ProductOverview product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
//               <Lists product_id={this.state.product_id} changeProduct={this.changeProduct.bind(this)}/> <br/><br/><hr/><br/><br/>
//               <QuestionsAnswers product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
//               <Reviews product_id={this.state.product_id}/>
//               </>
//             }
//             />

//         </Routes>
//     </Router>
//   )
// }
// }

//createRoot(document.getElementById('root')).render(<App />)



import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import {createRoot} from 'react-dom/client';

class Index extends React.Component {

  render() {
    return(
      <App/>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
//ReactDOM.render(<App />, document.getElementById("root"));