import React, { Component } from 'react';
import Card from './Card'

class PopularBattle extends Component {
    constructor(){
        super()
        this.state= {
            movies: [],
            currentBattle: 2
            
        }
    }
    
handleClick=function(){
    this.setState ({currentBattle: this.state.currentBattle + 2})
    if (this.state.currentBattle=== 20){
        alert ("Vous avez parcouru tous les films !")
    }
}.bind(this)

async componentDidMount(){
    const API_KEY= '82468d95c0ef6780ea8ed609a5ecb6b5'
    try{
        const result= await fetch (`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
        const respons= await result.json()
        const movies= respons.results
        this.setState ({movies})
    }catch(error){}   
}

    render() {
        console.log (this.state)
        return (
            <div className="row">
                <h1>Popular battle</h1>
            <div className= 'row'>
                {this.state.movies.slice(0,this.state.currentBattle).map((movie,index) => (
                <div key= {index} className="col-4 d-flex align-items-stretch p-2"
                onClick= {this.handleClick} >
                <Card {...movie}/>
                </div>
                ),
                )}
        </div>
      </div>
    )
  }
}
               


export default PopularBattle