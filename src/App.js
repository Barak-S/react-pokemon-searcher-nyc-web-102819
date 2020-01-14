import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

class App extends React.Component{

  // state = {
  //   allPokemon: [],
  // }

  // componentDidMount(){
  //   fetch("http://localhost:3000/pokemon")
  //   .then(resp=> resp.json())
  //   .then(data=> {
  //     this.setState({
  //       allPokemon: data
  //     })
  //   })
  // }

  render(){


    return(
      <div className="App">
        
        <PokemonIndex
        />
      </div>

    )
  }
    
}


export default App
