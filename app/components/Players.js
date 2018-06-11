import React from 'react'
import PlayerList from './PlayerList'

export default class Players extends React.Component {

  constructor(props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.getData = this.getData.bind(this)
    this.state = {
      content: '',
      players: ['loading']
    }
  }

  onInputChange(event){
    this.setState({
      content: event.target.value
    })
    console.log(this.state.content)
  }


  getData(event) {
    fetch('http://localhost:5000/api/players', {
      method: 'POST',
      body: JSON.stringify({userName: this.state.content, userScore: '1000'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(this.setState({
        content: ''
      }))
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
  }

  render() {
    const {content, players} = this.state

    return (
      <div>
        <input 
          onChange={this.onInputChange}
          value={content}/>
        <button onClick={this.getData}>create player</button>
        <PlayerList count={players.map((player, index) => <p key={index}>{player.name} {player.score}</p>)} />
      </div>
    )
  }

}