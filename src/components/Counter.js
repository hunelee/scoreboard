import React from 'react';
import PropTypes from 'prop-types';

// class component
export class Counter extends React.Component {
  constructor() {
    super();
    // this.incrementScore = this.incrementScore.bind(this);
  }
  
  // 애로우펑션안의 this는 lexical this로써 자기자신을 가리키게 된다
  handleScore = (delta) => {
    console.log('increment', this);
    
    // this.state.score +=1;
    // setState를 호출해야만 UI 렌더링이 된다
    // this.setState({score: this.state.score + 1});
    this.setState(prevState => {
      return {score: prevState.score + delta}
    })
  }
  
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"
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