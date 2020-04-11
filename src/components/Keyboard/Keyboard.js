import React from 'react';
import Keys from '../Keys/Keys';
import './Keyboard.css';

const Keyboard = props => {
  const { keys, handlePressedLetter, word, gameAlive, gameCompleted } = props;

  return (

    <div 
      className={gameAlive ? "keyboard" : "keyboard gray"}
    >
      {keys.map(key => (
        <Keys key={key} letter={key} handlePressedLetter={handlePressedLetter} word={word} gameAlive={gameAlive} gameCompleted={gameCompleted} />
      ))}
    </div>
  )
};

export default Keyboard;