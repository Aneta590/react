import React, { Component } from 'react'

class Cards extends Component {
    constructor() {
        super()
        this.state = {
            image: 'image/item.png',
        }
    }

    render() {
        return (
            <div className="card">
                
                    <img
                        className= "card-img-top"
                        src= {this.props.image}
                        alt=""
                        onClick={() => this.props.onClick(this.props.productName, this.props.price)}
                    />
                    <div className= "card-body">
                        <h5 className= "card-title"> {this.props.productName}</h5>
                        <p className= "card-text"> {this.props.price} €</p>

                    </div>
                </div>
    )
  }
}

export default Cards
