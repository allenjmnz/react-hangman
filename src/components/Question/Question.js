import React from 'react'
import { useTransition, animated } from 'react-spring'
import Letter from '../Letter/Letter'
import './Question.css'

const Question = ({gameAlive, qna, questionNum, pressedLettersArray}) => {
  const currentQ = qna[questionNum];

  const transitions = useTransition(currentQ, questionNum, {
    from: { opacity: 0, transform: 'translateX(200px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-200px)' }
  })
  
  return (
    transitions.map(({ item, key, props }) => (
        <animated.div className={gameAlive ? "question" : "question gray"} key={key} style={props}>
          <p>{item.question}</p>
          <div className="guessing-word">
            {item.answer.split("").map((singleLetter, index) => (
              <Letter 
                key={`${index}${singleLetter}`}
                singleLetter={singleLetter}
                pressedLettersArray={pressedLettersArray}
              />
            ))}
          </div>
        </animated.div>
      )
    )
  )

  return (
    <div className={gameAlive ? "question" : "question gray"}>
      <p>{currentQ.question}</p>
      <div className="guessing-word">
        {currentQ.answer.split("").map((singleLetter, index) => (
          <Letter 
            key={`${index}${singleLetter}`}
            singleLetter={singleLetter}
            pressedLettersArray={pressedLettersArray}
          />
        ))}
      </div>
    </div>
  )
}

export default Question

