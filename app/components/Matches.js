import React from 'react';
import Match from './Match';

export default class Matches extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:5000/api/matches')
    .then(result => result.json())
    .then(data => this.setState({ matches: data }))
  }

  render() {
    return (
      <div>
        <h2>Matches</h2>
        <ul>
          {this.state.matches.map((match, index) => (
            <li key={index}>{match.winner}</li>
          ))}
        </ul>
      </div>
    );
  }
}