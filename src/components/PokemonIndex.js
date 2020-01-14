import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp=> resp.json())
    .then(data=> {
      this.setState({
        allPokemon: data
      })
    })
  }

  handleChange=(e)=>{
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {

    let displayedPokemon= this.state.allPokemon.filter(pokemon=> pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search value={this.state.searchTerm} onChange={this.handleChange} />
        <br />
        <PokemonCollection 
          allPokemon={displayedPokemon}
        />
      </Container>
    )
  }
}

export default PokemonPage
