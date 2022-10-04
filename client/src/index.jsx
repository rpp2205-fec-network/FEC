import React from "react";
import ReactDOM from 'react-dom';
import Lists from './RelatedProducts/Lists.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
}

render() {
  return (
    <div>
      <div>Hello World</div>
      <Lists/>
    </div>
  )
}
}

ReactDOM.render(<App />, document.getElementById('root'))
