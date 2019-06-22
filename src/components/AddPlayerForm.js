import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value : ''
  }
  
  handleChange = (e) => {
    console.log(e);
    this.setState({value: e.target.value});
  }
  
  render() {
    return (
      <form className="form">
        <input type="text" className="input" placeholder="enter a player's name"
          value={this.state.value} onChange={this.handleChange}></input>
        <input type="submit" className="input" value="Add Player"></input>
      </form>
    );
  }
}