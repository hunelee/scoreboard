import React from 'react';
import {Header} from './components/Header';
import './App.css';
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

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
  
  /**
   * 스코어를 변경시키는 함수
   * @param id : 플레이어 아이디
   * @param delta 증가면 1 감소면 -1
   */
  handleChangeScore = (id, delta) => {
    console.log('change score', id, delta);
    
    this.setState(prevState => {
      prevState.players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      });
      return {players: [...prevState.players]}
    });
  }
  
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players} />
        
        {
          this.state.players.map(player => (
            <Player key={player.id}
                    name={player.name} id={player.id} score={player.score}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore} />
          ))
        }
        
        <AddPlayerForm/>
      </div>
    )
  }
}

export default App;
