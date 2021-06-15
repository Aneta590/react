import React from 'react'

class Button extends React.Component {
    
// children- to text <p>text</p>
    render() {
        return (
            
                <Button className="btn btn-warning"
                    onClick={this.props.onClick}
                >
                    {this.props.children } 

                </Button>
           
        )
    }
}


export default Button