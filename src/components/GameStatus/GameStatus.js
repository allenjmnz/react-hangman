import React, { Component } from 'react'
import './GameStatus.css'

class GameStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false
    }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.questionNumber < this.props.questionNumber && this.state.changed === false && this.props.questionNumber !== this.props.qna.length - 1) {
      this.setState({
        changed: true
      })
      setTimeout(() => {
        this.setState({
          changed: false
        })
      }, 1200)
    }
  }

  render() {
    const { resetGame, gameAlive, gameCompleted } = this.props;
    return (
      <>
        <div className={gameAlive ? "game-status" : "game-status not-alive"}>
          <p>Oh no, perdiste :(</p>
          <button
            onClick={resetGame}
          >Reiniciar</button>
        </div>
        <div className={this.state.changed ? "game-correct correct" : "game-correct"}>
          <p>¡Correcto!</p>
        </div>
        <div className={!gameCompleted ? "game-restart" : "game-restart show"}>
          <button
            onClick={resetGame}
          >Reiniciar</button>
        </div>
      </>
    )
  }
}

export default GameStatus