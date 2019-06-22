import React from 'react';
import {Header} from './components/Header';
import './App.css';
import {Player} from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'AAA', id: 1, score: 0},
      {name: 'BBB', id: 2, score: 0},
      {name: 'CCC', id: 3, score: 0},
      {name: 'DDD', id: 4, score: 0}
    ]
  }
  
  handleRemovePlayer = (id) => {
    console.log('remove player: ', id);
    
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }
  
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11} />
        
        {
          this.state.players.map(player => (
            <Player key={player.id}
                    name={player.name} id={player.id} score={player.score}
                    removePlayer={this.handleRemovePlayer} />
          ))
        }
      </div>
    )
  }
}

export default App;
