import React from 'react'
import "./Game.css";

const Game = ({verifyLetter}) => {
  return (
    <div>
      <h1>jogando</h1>
      <button onClick={verifyLetter}>Finalizar Jogo</button>
    </div>
  )
}

export default Game
