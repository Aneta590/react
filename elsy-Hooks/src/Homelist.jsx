mport React from 'react';
import MagicButton from './MagicButton'

class Homelist extends React.Component {

  constructor (props) {
    super(props); 
    this.state = {
        utilisatueur1:"mike"
        utilisatueur2:"anna"
        utilisatueur3:"julie"

      
    }
  }

  changeList = () => {
    this.setState({utilisatueur1: this.state })
  }

  render() {
    return (
      <div>
        <ul>
        <li>Mike</li>  
        <li>Anna</li>
        <li>Julie</li>
        </ul>
      </div>
    )
  }
}

export default Homelist;