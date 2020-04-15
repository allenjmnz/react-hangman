import React from 'react'
import { useTransition, animated } from 'react-spring'
import Letter from '../Letter/Letter'
import './Question.css'

const Question = ({gameAlive, qna, questionNum, pressedLettersArray}) => {
  const currentQ = qna[questionNum];

  const transitions = useTransition(currentQ, currentQ => currentQ.answer, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' }
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
}

export default Question

