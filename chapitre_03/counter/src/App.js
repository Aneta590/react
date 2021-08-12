
import './App.css'
import React from 'react'
import Counter from './Counter.jsx'

class App extends React.Component {
  constructor(props) {
     super(props);
    this.decrementCount=this.decrementCount.bind(this)
   

    this.state = { 
      count: 0  
    }
  }
  decrementCount(){
    this.setState({count:this.state.count -1})
  }
  incrementCount=()=>{
    this.setState({count:this.state.count +1})
  }
  render(){
  return (
  <Counter addFunction={this.incrementCount} subtractFunction={this.decrementCount} count={this.state.count}/>
  )
    
} 
}
export default App
