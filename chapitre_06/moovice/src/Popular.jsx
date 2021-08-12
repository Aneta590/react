import React, { Component } from 'react';
import Card from './Card'


class Popular extends Component {
    constructor(){
        super()
        this.state={
            movies: [],
            
        }
    }
    
    async componentDidMount(){
        const API_KEY= '82468d95c0ef6780ea8ed609a5ecb6b5'
        try{
            const sit= await  fetch (`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            const result= await sit.json()
            
            this.setState({movies:result.results})
        }catch(error){}
    }

    render() {
        return (
            <div className= " MoviesList" className="row">
                <h1>Popular</h1>

            {this.state.movies.map(movie =>(
                <Card  className="col-4 d-flex align-items-stretch p-2"
                title={movie.title} 
                date={movie.release_date} 
                overview={movie.overview} 
                backdrop_path={movie.backdrop_path}
                key={movie.id}  >
                </Card >
             ) )}
          
            
                
                
            </div>
        );
    }
}

export default Popular