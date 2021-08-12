
import React from 'react'

class Component extends React.Component {
    constructor () {
        super()
        this.state= {
            count: 0
        }
    }
    render(){
        return (
        <div>
            component: {this.state.count}
            <button onClick={()=> this.setState({count:this.state.count+1})}>inc</button>
            
        </div>
    )}
}


export default Component
