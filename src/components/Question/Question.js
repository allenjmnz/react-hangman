import React from 'react'
import { useTransition, animated } from 'react-spring'
import Letter from '../Letter/Letter'
import './Question.css'

const Question = ({gameAlive, qna, questionNum, pressedLettersArray}) => {
  const currentQ = qna[questionNum];

  const transitions = useTransition(currentQ, questionNum, {
    from: { opacity: 0, position: 'relative', transform: 'translate3d(200px, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0px)' },
    leave: { opacity: 0, transform: 'translate3d(-200px, 0, 0)' }
  })
  
  return (
      transitions.map(({ item, key, props }) => (
        <animated.div className={gameAlive ? "question" : "question gray"} style={props}>
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
      ))
  )
}

export default Question

