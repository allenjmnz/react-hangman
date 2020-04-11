import React from 'react'
import { useTransition, animated } from 'react-spring'
import { ReactComponent as Ahorcado1 } from './puppets-img/ahorcado-1.svg'
import { ReactComponent as Ahorcado2 } from './puppets-img/ahorcado-2.svg'
import { ReactComponent as Ahorcado3 } from './puppets-img/ahorcado-3.svg'
import { ReactComponent as Ahorcado4 } from './puppets-img/ahorcado-4.svg'
import { ReactComponent as Ahorcado5 } from './puppets-img/ahorcado-5.svg'
import { ReactComponent as Ahorcado6 } from './puppets-img/ahorcado-6.svg'
import { ReactComponent as Ahorcado7 } from './puppets-img/ahorcado-7.svg'
import './Puppet.css'

const Puppet = (props) => {
  const { currOp, gameAlive, questionNumber, qna } = props;

  const ahorcadosArr = [<Ahorcado1 />, <Ahorcado2 />, <Ahorcado3 />, <Ahorcado4 />, <Ahorcado5 />, <Ahorcado6 />, <Ahorcado7 />, <Ahorcado7 />]

  const transitions = useTransition(ahorcadosArr[currOp], currOp, ((currOp === 0) ? {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 }
    } : {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0.9 }
    })
  )

  return (
    <div className={gameAlive ? "puppet-container" : "puppet-container gray"}>
      <div className="question-number">{questionNumber !== qna.length - 1 ? questionNumber + 1 : questionNumber}<div className="divider"></div><div className="smaller-number">{qna.length - 1}</div></div>
      {transitions.map(({ item, key, props }) => (
        <animated.div className="puppet-animated" style={props}>{item}</animated.div>
      ))}
    </div>
  )
}

export default Puppet
