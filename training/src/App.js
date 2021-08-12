import React,{useState} from 'react'
import {themes, ThemeContext} from './themeContext'
import Paragraph from './Paragraph'

function App() {
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = useCallback (()=>{
    setTheme(theme=== themes.dark ? themes.light : themes.dark)
  },[setTheme,theme])
  
  return <ThemeContext.Provider value={themes}>
     <div style={{...theme}}>
     <h1>Bienvenue</h1>
     Hello <button onClick={toggleTheme}> Toggle </button>
    
     <Paragraph> </Paragraph>
      </div>
   </ThemeContext.Provider>
  
}

export default App