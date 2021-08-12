import React, { Component } from 'react';

import Card from './Card'
import { DateTime } from "luxon"

class Weekly extends Component {
  constructor () {
    super()
    this.state = {
      movies: [],
    }
  }

  async componentDidMount () {
    const API_KEY = '82468d95c0ef6780ea8ed609a5ecb6b5'
    const TODAY = DateTime.now().toISODate()
    const LAST_WEEK = DateTime.now().minus({weeks:1}).toISODate()
    const result = await fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}`)
    const response = await result.json()
    const movies = response.results
    this.setState({ movies })
  }

  render () {
    return (
      <div>
        <h1>
          Weekly
        </h1>
        <div className="row">
          {this.state.movies.map((movie, index) => (
              <div key={index} className="col-4 d-flex align-items-stretch p-2">
                <Card {...movie}/>
              </div>
            ),
          )}
        </div>
      </div>
    )
  }
}

export default Weekly