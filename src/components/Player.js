import React from 'react';
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

class Player extends React.Component {
  render() {
    console.log(this.props.name, ' rendered');
    const {removePlayer, id, name, score, changeScore} = this.props;
    
    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => removePlayer(id)}>X</button>
      {name}
    </span>
        <Counter score={score} id={id} />
      </div>
    )
  }
  
  componentWillReceiveProps(nextProps, nextContext) {
  }
  
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextProps, nextState);
    return nextProps.score !== this.props.score;
  }
}

// 액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
  removePlayer: (id) => dispatch(removePlayer(id))
})

// 커링 펑션, HoC(a higher-order component is 컴포넌트를 취하여 새로운 컴포넌트를 반환하는 함수)
export default connect(null, mapActionToProps)(Player);