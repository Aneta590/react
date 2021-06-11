
import React from 'react'

import './App.css'

import Add from './components/Add.jsx'
import List from './components/List.jsx'
import Pay from './components/Pay.jsx'
import Onglet from './components/Onglet.jsx'


class App extends React.Component {
   constructor () {
    super()

    this.state = {
      activeTab: 'add',
      activeTab: 'list',
      activeTab: 'pay',
      items: [],
    }
  } 
  addItem=function(name,price){
   this.setState({items:[...this.state.items, {name,price}]})
  }.bind(this)
  

  render () {
    return (
      <div className="App">
        
        <Onglet isSelected={this.state.activeTab==='add'} 
        onClick={() => this.setState({activeTab:'add'})}>Add</Onglet>
        <Onglet isSelected={this.state.activeTab==='list'} onClick={() => this.setState({activeTab:'list'})}>Add</Onglet>
        <Onglet isSelected={this.state.activeTab==='pay'} onClick={() => this.setState({activeTab:'pay'})}>Add</Onglet>

        {this.state.activeTab==='add' && <Add addItem={this.addItem} />}
        {this.state.activeTab==='list' && <List items={this.state.items}/>}
        {this.state.activeTab==='pay' && <Pay/>}
      </div>
    )
  }

}

export default App


