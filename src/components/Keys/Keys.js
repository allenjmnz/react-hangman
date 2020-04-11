import React, { Component } from 'react'
import './Keys.css'


export class Keys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: null
    }
  }

  handleClick = () => {
    const { letter, word, handlePressedLetter } = this.props;
    handlePressedLetter(letter);
    if (word.includes(letter)) {
      this.setState({
        right: true
      })
    } else {
      this.setState({
        right: false
      })
    }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.word !== this.props.word || (prevProps.gameAlive === false && this.props.gameAlive === true)) {
      this.setState({
        right: null
      })
    }
    if (prevProps.gameCompleted === false && prevProps.gameCompleted !== this.props.gameCompleted) {
      this.setState({
        right: null
      })
    }
  }

  render() {
    const { right } = this.state;
    const { letter, gameCompleted } = this.props;
    return (
      <div
        className={right === null ? 
          "key" :
            (right === true ? 
            "key green" : 
            "key red") 
          }
        style={{pointerEvents: gameCompleted ? 'none' : 'auto '}}
        onClick={this.handleClick}
      >
        {letter}
      </div>
    )
  }
}

export default Keys