
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      count: 0,   
    };
  }
  decrementCount=()=>{
    this.setState({count:this.state.count -1})
  }
  incrementCount=()=>{
    this.setState({count:this.state.count +1})
  }
  render(){
  return (
    <div className="Counter">
        <h1>
         "Counter" 
        </h1>
        <h2>{this.state.count}</h2>
       
       <button class="plus" onClick={this.decrementCount} >minus</button> 
       <button class="minus" onClick={this.incrementCount} >plus</button> 
    </div>
  );
} 
}
export default App;
