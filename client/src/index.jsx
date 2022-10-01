import React from "react";
import ReactDOM from 'react-dom';
import ProductOverview from './Product Overview/productOverview.jsx'

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
    </div>
  )
}
}

ReactDOM.render(<App />, document.getElementById('root'))
