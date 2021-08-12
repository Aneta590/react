import React,{useState} from 'react'
import {themes, NavContext} from './themeContext'
import Paragraph from './Paragraph'

function App() {
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = useCallback (()=>{
    setTheme(theme=== themes.dark ? themes.light : themes.dark)
  },[setTheme,theme])
  
  return <NavContext.Provider value={themes}>
     <div style={{...theme}}>
     <h1>Bienvenue</h1>
     <input type='text'className='form-control placeholder="name' onClick={toggleTheme}> Name </input>
    
     <Paragraph> </Paragraph>
      </div>
   </NavContext.Provider>
  
}

export default App