import React from 'react';

export default class LeaderBoard extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    // could probably move this to another function
    fetch('http://localhost:5000/api/players')
    .then(result => result.json())
    .then(data => this.setState({ players: data }))
  }

  render() {
    return (
      <div>
        <h2>This is LeaderBoard</h2>
        <ul>
          {this.state.players.map((player, index) => (
            <li key={index}>{player.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}