import React from 'react';
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {playerReducer} from "../redux/reducers/player";
import {connect} from "react-redux";

import styles from "../pages/scoreboard/Scoreboard.module.css";

const Header = ({title, players}) => {
  // console.log(props);
  // const {title, totalPlayers} = props; // destruct assignment
  return (
    <header className={styles.header}>
      <Stats players={players}/>
      <h1 className={styles.h1}>{title}</h1>
      <Stopwatch/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    score: PropTypes.number,
    name: PropTypes.string
  }))
}

Header.defaultProps = {
  title: 'Scoreboard'
}

const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 state
  title: state.playerReducer.title,
})

// 커링 펑션, HoC(a higher-order component is 컴포넌트를 취하여 새로운 컴포넌트를 반환하는 함수입니다.)
export default connect(mapStateToProps, null)(Header);