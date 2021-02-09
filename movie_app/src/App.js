import React from "react";
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    count:0
  };

  Add = () => {
    console.log("add");
  }
  Minus = () => {
    console.log("minus");
  }
  render(){
    return(
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.Add}>Add</button>
        <button onClick={this.Minus}>Minus</button>
      </div>
    )
  }
}
export default App;
