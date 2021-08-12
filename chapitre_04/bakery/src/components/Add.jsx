import React from 'react'

class Add extends React.Component {
  constructor () {
    super()

    this.state = {
      productName: '',
      price: 1,
    }
    


   //this.updatePriceWithBind = this.updatePriceWithBind.bind(this)
  }
  updateProductName=(event)=>{
    this.setState({ productName: event.target.value})
  }

  updatePrice=(event) => {
    this.setState({ price: event.target.value})
  }
  //updatePriceWithBind(){

  //}
  //wysylam te dane o moim 'Add state' do App
  sendItem = () => {
    this.props.addItem(this.state.productName, this.state.price)
  }



  render () {
    return (
      <div>
        <input type="text" onChange={this.updateProductName} className="form-control" />
        <input type="range" onChange={this.updatePrice} min={1} max={10} className="form-range"/>
        <button className="btn btn-primary" onClick={this.sendItem}>Add</button>
      </div>
    )
  }
}
export default Add
