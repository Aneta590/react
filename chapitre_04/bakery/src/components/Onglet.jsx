import  Button  from 'react-bootstrap/Button';
import React from 'react';


class Onglet extends React.Component {

 

  render() {
    return (
      <div>
        
       <Button variant= {this.props.isSelected ? 'primary' :'outline-dark'} onClick={this.props.onClick} >{this.props.children}</Button>
       {this.props.toSelected}
       {this.props.onClick}
       {this.props.children}
      </div>
    )
  }
}

export default Onglet
