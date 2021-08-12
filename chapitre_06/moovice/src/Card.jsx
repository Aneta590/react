import React, { Component } from 'react';


class Card extends Component {
    constructor() {
        super()
        this.state = {
            image: 'image/image.png'
        }
    }


    addToFavorites= (e) => {
        const id= this.props.id
        let favorites= JSON.parse (window.localStorage.getItem ('favorites'))
        if (!favorites) {
            favorites= [] 
        }
        favorites.push(id)
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }
       
        
    render() {
        console.log(this.props)
        return (
           
            <div className="card"   style={{width:'20rem', padding:'20px', margin:'10px'}}>
            <img src={`https://image.tmdb.org/t/p/w300/${this.props.backdrop_path}`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.overview}</p>
              <button onClick= {this.addToFavorites}>Ajouter aux favoris</button>
              
            </div>
          </div>

               
           
        );
    }
}

export default Card