import React, { useContext } from 'react'
import { ThemeContext } from './themeContext'


function Paragraph (){
    const theme= useContext(ThemeContext)
    return(
        <p >
           le fons est : {theme.backgroundColor}, le text est : {theme.color}
        </p>
    )
}
export default Paragraph