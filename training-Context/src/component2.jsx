import React, {useState} from 'react'

function Component2 (){

    const [ count,setCount]= useState(0)
    
    return <div>
        component2:{count}
    <button onClick={()=> setCount(count+1)}>inc2</button>
   
    </div>
}
export default Component2