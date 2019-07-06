import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";
import classNames from "classnames";

import styles from "../pages/scoreboard/Scoreboard.module.css";

class Counter extends React.Component {
  constructor() {
    super();
    // this.incrementScore = this.incrementScore.bind(this);
  }
  
  // 애로우펑션안의 this는 lexical this로써 자기자신을 가리키게 된다.
  handleScore = (delta) => {
    console.log('increment:', this);
    
    // this.state.score += 1;
    // setState를 호출해야만 UI 렌더링이 된다.
    // this.setState({score: this.state.score + 1});
    this.setState(prevState => {
      return {score: prevState.score + delta}
    })
  }
  
  render() {
    return (
      <div className={styles.counter}>
        <button className={classNames(styles["counter-action"], styles.decrement)}
                onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
        <span className={styles["counter-score"]}>{this.props.score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)}
                onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
      </div>
    )
  }
}

Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}

// 액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
  changeScore: (id, delta) => dispatch(changeScore(id, delta))
})

// 커링 펑션, HoC
export default connect(null, mapActionToProps)(Counter);