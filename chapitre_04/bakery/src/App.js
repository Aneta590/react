
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Button from 'react-bootstrap/Button';
import Add from './components/Add.jsx'
import List from './components/List.jsx'
import Pay from './components/Pay.jsx'
import Onglet from './components/Onglet.jsx'


class App extends React.Component {
  





  constructor () {
    super()

    this.state = {
      activeTab: 'add',
      items: [],
    }
  } 

  render () {
    return (
      <div className="App">
        
        <Onglet isSelected={this.state.activeTab==='add'} onClick={() => this.setState({activeTab:'add'})}>Add</Onglet>
        <Onglet isSelected={this.state.activeTab==='list'} onClick={() => this.setState({activeTab:'list'})}>Add</Onglet>
        <Onglet isSelected={this.state.activeTab==='pay'} onClick={() => this.setState({activeTab:'pay'})}>Add</Onglet>

        {this.state.activeTab==='add' && <Add/>}
        {this.state.activeTab==='add' && <List/>}
        {this.state.activeTab==='add' && <Pay/>}
      </div>
    )
  }

}

export default App


