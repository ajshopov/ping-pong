import React from 'react'
// import PasswordInput from './PasswordInput'
// import Players from './Players'
// import PlayerList from './PlayerList'
import LeaderBoard from './LeaderBoard';
import Matches from './Matches';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>Ping Pong</h1>
        <LeaderBoard />
        <Matches />
      </div>
    )
  }

}
