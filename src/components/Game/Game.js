import React, { Component } from 'react';
import Question from '../Question/Question';
import Keyboard from '../Keyboard/Keyboard';
import Puppet from '../Puppet/Puppet';
import GameStatus from '../GameStatus/GameStatus';
import { questionsAndAnswers } from '../../gamedata';
import Confetti from 'react-confetti';
import './Game.css';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsAndAnswers,
      triggerConfetti: false,
      gameCompleted: false,
      gameAlive: true,
      pressedLettersArray: [],
      currOp: 0,
      maxOps: 6,
      questionNumber: 0,
      keys: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'Ñ',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ]
    };
  }

  handlePressedLetter = letter => {
    const pressedLettersArray = [...this.state.pressedLettersArray] || [];
    const word = this.state.questionsAndAnswers[this.state.questionNumber].answer;
    if (word.includes(letter)) {
      this.setState({
        pressedLettersArray: [...pressedLettersArray, letter]
      });
    } else {
      this.setState({
        currOp: this.state.currOp + 1
      });
      if (this.state.currOp >= this.state.maxOps) {
        this.setState({
          gameAlive: false
        });
      }
    }
  };

  resetGame = () => {
    this.setState({
      triggerConfetti: false,
      gameCompleted: false,
      gameAlive: true,
      currOp: 0,
      questionNumber: 0,
      pressedLettersArray: []
    });
  };

  componentDidMount = () => {
    if (this.state.gameCompleted === true) {
      this.setState({
        triggerConfetti: true
      });
    }
  };

  componentDidUpdate = () => {
    const wordLettersArr = this.state.questionsAndAnswers[this.state.questionNumber].answer.split('');
    const keysPressedArr = this.state.pressedLettersArray;
    const complete = wordLettersArr.every(letter => keysPressedArr.includes(letter));
    if (complete) {
      if (this.state.questionNumber < this.state.questionsAndAnswers.length - 2) {
        this.setState({
          pressedLettersArray: [],
          currOp: 0,
          questionNumber: this.state.questionNumber + 1
        });
      } else if (
        this.state.questionNumber === this.state.questionsAndAnswers.length - 2 &&
        this.state.gameCompleted === false
      ) {
        this.setState({
          gameCompleted: true,
          currOp: 0,
          pressedLettersArray: this.state.questionsAndAnswers[this.state.questionNumber + 1].answer.split(''),
          questionNumber: this.state.questionNumber + 1
        });
      }
    }
    if (this.state.gameCompleted === true && this.state.triggerConfetti === false) {
      this.setState({
        triggerConfetti: true
      });
    }
  };

  render() {
    const word = this.state.questionsAndAnswers[this.state.questionNumber].answer;
    return (
      <div className="game">
        {this.state.triggerConfetti ? (
          <Confetti
            height={document.querySelector('.game').offsetHeight}
            width={document.querySelector('.game').offsetWidth}
          />
        ) : null}
        <h2>Bienvenid@</h2>

        <Puppet
          questionNumber={this.state.questionNumber}
          currOp={this.state.currOp}
          gameAlive={this.state.gameAlive}
          qna={this.state.questionsAndAnswers}
        />

        <Question
          qna={this.state.questionsAndAnswers}
          questionNum={this.state.questionNumber}
          pressedLettersArray={this.state.pressedLettersArray}
          gameAlive={this.state.gameAlive}
        />

        <GameStatus
          qna={this.state.questionsAndAnswers}
          gameAlive={this.state.gameAlive}
          resetGame={this.resetGame}
          questionNumber={this.state.questionNumber}
          gameCompleted={this.state.gameCompleted}
        />

        <Keyboard
          keys={this.state.keys}
          handlePressedLetter={this.handlePressedLetter}
          word={word}
          gameAlive={this.state.gameAlive}
          gameCompleted={this.state.gameCompleted}
        />
      </div>
    );
  }
}

export default Game;
