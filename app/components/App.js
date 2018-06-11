import React from 'react'
// import PasswordInput from './PasswordInput'
import Players from './Players'
import PlayerList from './PlayerList'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      players: ['loading...']
    }
  }

  render() {
    return <div>
      <h1>Ping Pong</h1>
      <label>enter new player name</label>
      <Players />
    </div>
  }

}
