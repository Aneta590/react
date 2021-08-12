import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import Onglet from './components/Onglet'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      activeTab: 'add',
      items: [],
      itemsWithImages: [],
    }
  }
//otrzymuje wyslane dane z Add i state
  addItem = (name, price) => {
    const itemToAdd = { name: name, price: price, image: '' }
    const itemFound = this.state.itemsWithImages.find(item => item.name === name)
    if (itemFound) {
      itemToAdd.image = itemFound.image
    } else {
      itemToAdd.image = '/image/item.png'
    }
    // Equivalent
    // itemToAdd.image = itemFound ? itemFound.image : '/images/item.png'
    this.setState({ items: [...this.state.items, itemToAdd] })  
  }

  
  deleteItem = (index) => {
    this.state.items.splice(index, 1)
    this.setState({ items: [...this.state.items] })
  }

  async componentDidMount () {
    try {
      const result = await fetch('https://raw.githubusercontent.com/StephaneRavet/datamock/main/bakery.json')
      const products = await result.json()
      this.setState({ itemsWithImages: products })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">
            <Onglet isSelected={this.state.activeTab === 'Add'}>Add</Onglet>
          </Link>
          <Link to="/list">
            <Onglet isSelected={this.state.activeTab === 'list'}>List</Onglet>
          </Link>
          <Link to="/pay">
            <Onglet isSelected={this.state.activeTab === 'Pay'}>Pay</Onglet>
          </Link>
        </nav>
        <div className="container p-5 text-center">

          <Switch>
            <Route exact path="/">
              <Add addItem={this.addItem}/>
            </Route>
            <Route path="/list">
              <List items={this.state.items} deleteItem={this.deleteItem}/>
            </Route>
            <Route path="/pay">
              <Pay items={this.state.items}/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }

}

export default App