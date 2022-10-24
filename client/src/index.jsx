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

<<<<<<< HEAD

  changeProduct(e) {
    this.setState({
      product_id: e
    })
  }

=======
>>>>>>> main
render() {
  return (
    <div>
    <ProductOverview product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
<<<<<<< HEAD
    <Lists product_id={this.state.product_id} changeProduct={this.changeProduct.bind(this)}/> <br/><br/><hr/><br/><br/>
=======
    <Lists product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
>>>>>>> main
    <QuestionsAnswers product_id={this.state.product_id}/> <br/><br/><hr/><br/><br/>
    <Reviews product_id={this.state.product_id}/>
    </div>
  )
}
}

createRoot(document.getElementById('root')).render(<App />)