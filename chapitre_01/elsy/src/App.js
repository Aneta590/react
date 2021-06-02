import React from "react";
import './styles/global.css';
import Box from './components/Box.jsx';

const tempMin=-20;
const tempMax=40;
const heartMin=80;
const heartMax=180;
const stepsMin=0;
const stepsM=50000;

class App extends React.Component {
  render() {
    
    return (
     <div className="container-fluid">
      <div className="row "></div>
      <p>Heart: {heartMin}</p>
         <p>Temperature: {tempMin}</p>
           <p>Steps: {stepsMin}</p>

           <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
      <Box icon = "directions_walk" color = "black" value={3000}/>
      <Box icon="favorite" color = "red" value={120}/>
      <Box icon="wb_sunny" color = "yellow" value={-10}/>
      
    
    </div>
    );
  }
}

export default App;