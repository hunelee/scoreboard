import React from 'react';

export const Header = ({title, totalPlayers}) => {
  // console.log(props);
  // const {title, totalPlayers} = props; // destruct assignment
  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  )
}