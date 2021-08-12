import React, { useContext } from 'react'



export const themes= {
    light: {
       color : '#000',
       backgroundColor: '#fff'
    },
    dark:{
        color:'#fff',
        backgroundColor:'#000'
    }
}
export const NavContext = React.createContext(defaultValue)