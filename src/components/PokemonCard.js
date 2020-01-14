import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    faceDown: false
  }

  handleClick=()=>{
    console.log(this.props.pokemonObj)
    this.setState({
      faceDown: !this.state.faceDown
    })
  }

  render() {

    let { name, stats, sprites } = this.props.pokemonObj

    let hp = stats.find(key=>key.name==='hp').value

    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src = {this.state.faceDown? sprites.back: sprites.front}alt={name}/>
          </div>
          <div className="content">
          <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
