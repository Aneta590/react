import React from "react";
import './styles/global.css';
import Steps from './components/Steps.jsx';

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
      
      <Steps/><Steps/><Steps/><Steps/>
      <p>Heart:80 <br/>Temperature:-20<br/>Steps:0</p>
    
    </div>
    );
  }
}

export default App;