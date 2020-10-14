import React from 'react';
import NavBar from '../NavBar/NavBar';
import Game from '../Game/Game';
import './App.css';

const App = props => {
  return (
    <div className="app">
      <NavBar />
      <Game />
    </div>
  );
};

export default App;
