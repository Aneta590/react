import React,{useState} from "react";

import './styles/global.css';
import Box from './components/Box.jsx';

const tempMin= -20;
const tempMax= 40;
const heartMin=80;
const heartMax=180;
const stepsMin=0;
const stepsMax=50000;

function App(){
   
      const [water,setWater]= useState(0)
      const [heart,setHeart]= useState(120)
      const [temperature,setTemperature]= useState(-10)
      const [steps,setSteps]= useState(3000)
  
 
  
  const onHeartChange=(e)=>{ 
    setHeart (e.target.value)
    onWaterChange()
  }

  const onStepsChange=(e)=>{
    setSteps (e.target.value);
    onWaterChange()
  }
  const onTemperatureChange=(e)=>{
    setTemperature (e.target.value);
    onWaterChange()
  }

  
  const onWaterChange=()=>{
    console.log('onWaterChange')
    let temperatureContribution=0
    if(temperature>20 ){
      temperatureContribution=(temperature-20)* 0.02 
    }
    let heartRateContribution=0
    if(heart>120 ){
      heartRateContribution=(heart-120)* 0.0008 
    }
    let stepsContribution=0
    if(steps>10000 ){
      stepsContribution=(heart-10000)* 0.00002
    }

    setWater(1.5+ temperatureContribution + heartRateContribution +  stepsContribution);
  }
 
    
    return (
     <div className="container-fluid">
      <div className="row"></div>

      <Box icon="local_drink" color="#3A85FF" value={water} unit="L" />
      <Box icon = "directions_walk" color = "black" value={steps} min= {stepsMin} max= {stepsMax} onChange= {onStepsChange}/>
      <Box icon="favorite" color = "red" value={heart} min= {heartMin} max= {heartMax} onChange= {onHeartChange}/>
      <Box icon="wb_sunny" color = "yellow" value={temperature} min= {tempMin} max= {tempMax} onChange= {onTemperatureChange}/>
      
    
    </div>
    );
  
}

export default App;