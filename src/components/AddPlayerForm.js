import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

class AddPlayerForm extends React.Component {
  textInput = React.createRef();
  
  handleSubmit = (e) => {
    // 기본이벤트(페이지 재로딩) 막기
    e.preventDefault();
    
    this.props.addPlayer(this.textInput.current.value);
  }
  
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="text" className="input" placeholder="enter a player's name"
               ref={this.textInput}></input>
        <input type="submit" className="input" value="Add Player"></input>
      </form>
    );
  }
}

// 액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
  addPlayer: (name) => dispatch(addPlayer(name))
})

// 커링 펑션, HoC(a higher-order component is 컴포넌트를 취하여 새로운 컴포넌트를 반환하는 함수입니다.)
export default connect(null, mapActionToProps)(AddPlayerForm);