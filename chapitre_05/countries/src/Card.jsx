import React from 'react'

class Card extends React.Component {



    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={this.props.flag} alt='Flag' />

                < br /> Name : { this.state.name}
                < br /> Capital : { this.state.capital}
                < br /> Flag : { this.state.flag}
                < br /> Population : { this.state.population}
                < br /> Region : { this.state.region}

                <p>this.props.name</p>
            </div>






        )
    }
}


export default Card