
import React from 'react'
import Card from './Card'

class Pay extends React.Component {
  constructor () {
    super()
    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  
    
handleSelect (name, price) {
    const basket = [...this.state.basket, { name, price }]
    const total = basket.reduce((acc, item) => acc + Number(item.price), 0)
    const totalEcoTax = 0.03 * basket.length
    const totalTVA = total * 20 / 100
    const totalTTC = total + totalTVA + totalEcoTax
    this.setState({ total, totalTVA, totalEcoTax, totalTTC, basket })
  }


  render () {
    return (
      <div>
        <p>Total: {this.state.total} €</p>
        <p>Total TVA: {this.state.totalTVA} €</p>
        <p>Total EcoTax: {this.state.totalEcoTax} €</p>
        <p>Total TTC: {this.state.totalTTC} €</p>
        <div className="row">
          {this.props.items.map((item, index) =>
            <div className="col-4 mb-2" key={index}>
              <Card
                productName={item.name}
                price={item.price}
                image={item.image}
                onClick={this.handleSelect}
              />
            </div>,
            
          )}
        </div>
      </div>
    )
  }
}

export default Pay
