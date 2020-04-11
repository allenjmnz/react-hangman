import React from 'react';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import Game from '../Game/Game';
import './App.css';

const App = props => {

  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Game />
    </div>
  )
};

export default App;