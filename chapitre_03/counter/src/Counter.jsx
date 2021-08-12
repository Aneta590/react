import './App.css';
import React from 'react'


    const Counter=(props)=>{
     
        return (
          <div className="Counter">
              <h1>"Counter" </h1>             
             <div className="Wrapper">
             <button class="plus" onClick={props.addFunction} >-</button> 
             <h2>{props.count}</h2>
             <button class="minus" onClick={props.subtractFunction} >+</button> 
          </div>
          </div>
        );
      } 
     


      export default Counter;