import React from 'react';
import {connect} from "react-redux";
import Header from "../../components/Header";
import Player from "../../components/Player";
import AddPlayerForm from "../../components/AddPlayerForm";

import './Scoreboard.css';

class Scoreboard extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players} />
        
        {
          this.props.players.map(player => (
            <Player key={player.id}
                    name={player.name} id={player.id} score={player.score}
            />
          ))
        }
        
        <AddPlayerForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 state
  players: state.playerReducer.players
})

// 커링 펑션, HoC
export default connect(mapStateToProps, null)(Scoreboard);