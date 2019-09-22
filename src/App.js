import React from 'react';
import PropTypes from "prop-types"

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }
  
  state={
  
    count:0

  };
  add=()=>{
    this.setState(current =>({ count: current.count +1 }));
  };
  minus=()=>{ 
    this.setState(current =>({ count: current.count -1 }));
  };
  componentDidMount(){
    console.log("component renderd");
  }
  componentDidUpdate(){
    console.log("I'm just updated");
  }
  componentWillUnmount(){
    console.log("Good Bye. cruel world!")
  }
  render()
  {
    console.log("I'm rendering");
    return (
    <div>
      <h1>The number is:{this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
  </div>
   );
}
}
 
export default App;

