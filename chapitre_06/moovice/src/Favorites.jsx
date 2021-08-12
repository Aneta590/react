import React, { Component } from 'react';
import Card from './Card'

class Favorites extends Component {
    constructor(props){
    super(props)
        this.state= {
            favorites:[],
            movies:[],
            favIDs: this.getStorage()
        }
    }

    getStorage = () => {
        return localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')):[]
    }

    getMovie = async id => {
        const API_KEY= '82468d95c0ef6780ea8ed609a5ecb6b5'
        const movie = await fetch (`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(r => r.json())
        this.setState({ movies: [...this.state.movies, movie] })
      
    }


    componentDidMount () {
        this.state.favIDs.map ( id => this.getMovie(id)) 
    }

    render() {
        return (
            <div className= "row">
                <h1>Favorites</h1>

               {this.state.movies.map(movie => {
                   console.log(movie)
                   return <div key={movie.id} className= "col-4 flex align-items-stretch p-2">
                       <Card {...movie} />
                       </div>
               })
               }                
            </div>
        )
    }
}

export default Favorites