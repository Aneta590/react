import React from "react";
import './styles/global.css';
import Box from './components/Box.jsx';

const tempMin= -20;
const tempMax= 40;
const heartMin=80;
const heartMax=180;
const stepsMin=0;
const stepsMax=50000;

class App extends React.Component {
  constructor() {
    super();

    this.state = {  
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    };
  }
  
  onHeartChange=(e)=>{
    this.setState({heart: e.target.value}, this.onWaterChange);
  }
  onStepsChange=(e)=>{
    this.setState({steps: e.target.value}, this.onWaterChange);
  }
  onTemperatureChange=(e)=>{

    this.setState({temperature: e.target.value}, this.onWaterChange);
  }

  
  onWaterChange=()=>{
    console.log('onWaterChange')
    let temperatureContribution=0
    if(this.state.temperature>20 ){
      temperatureContribution=(this.state.temperature-20)* 0.02 
    }
    let heartRateContribution=0
    if(this.state.heart>120 ){
      heartRateContribution=(this.state.heart-120)* 0.0008 
    }
    let stepsContribution=0
    if(this.state.steps>10000 ){
      stepsContribution=(this.state.heart-10000)* 0.00002
    }

    this.setState({water:1.5+ temperatureContribution + heartRateContribution +  stepsContribution});
  }
  render() {
    
    return (
     <div className="container-fluid">
      <div className="row"></div>

      <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />
      <Box icon = "directions_walk" color = "black" value={this.state.steps} min= {stepsMin} max= {stepsMax} onChange= {this.onStepsChange}/>
      <Box icon="favorite" color = "red" value={this.state.heart} min= {heartMin} max= {heartMax} onChange= {this.onHeartChange}/>
      <Box icon="wb_sunny" color = "yellow" value={this.state.temperature} min= {tempMin} max= {tempMax} onChange= {this.onTemperatureChange}/>
      
    
    </div>
    );
  }
}

export default App;