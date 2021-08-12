
import React from 'react'
import Button from './Button'
import Card from './Card'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: '',
      region: '',
    }
  }

  async componentDidMount() {
    this.getCountry('france')

    //fetch('https://restcountries.eu/rest/v2/name/france')
    //.then(result => result.json())
    //.then(country => console.log('METHODE THEN', country))
    //.catch(error => console.error(error))

    //<Card {...this.state}></Card> -przenosi info o state (calym) do cards- w cards w render<p> go odbiera
  }


  async getCountry(country) {
    try {
      const result = await fetch('https://restcountries.eu/rest/v2/name/' + country)
      const country = await result.json()
      this.setState({
        name: country[0].name,
        capital: country[0].capital,
        flag: country[0].flag,
        population: country[0].population,
        region: country[0].region,

      })
    }
    catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div>

        <Button onClick={() => this.getCountry('france')}>France</Button>
        <Button onClick={() => this.getCountry('brazil')}>Brazil</Button>
        <Button onClick={() => this.getCountry('croatia')}>Croatia</Button>
        <Button onClick={() => this.getCountry('taiwan')}>Taiwan</Button>
        <Button onClick={() => this.getCountry('poland')}>Pologne</Button>

        <Card {...this.state}></Card>
       
      </div >
    )
  }
}

export default App