import React from 'react'

const Letter = (props) => {
  const { singleLetter, pressedLettersArray } = props;

  return (
    <div className="single-letter">
      {pressedLettersArray.includes(singleLetter) ? singleLetter : ""}
    </div>
  )
}

export default Letter
