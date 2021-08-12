

import React, {useState, useCallback} from 'react'
import Counter from './Counter.jsx'

function App()  {
  const [count, setCount]= useState(0) 
  const decrementCount= useCallback(
    () => {
      setCount (count-1)
    },
    [count,setCount],
  )
  const incrementCount= useCallback(
    () => {
      setCount(count +1)
    },
    [count,setCount],
  )

  return (
   
  <Counter addFunction={incrementCount} subtractFunction={decrementCount} count={count}/>
  )
    
}
export default App
