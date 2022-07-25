import React, { useState } from 'react'
import './Game.css'
import ActionBar from '../ActionBar/ActionBar'
import Scoreboard from '../Scoreboard/Scoreboard'
import GameBoard from '../GameBoard/GameBoard'

function Game() {
  const [turn, setTurn] = useState(1)
  const gameBoard = {
    red: [2,3,4,5,6,7,8,9,10,11,12],
    yellow: [2,3,4,5,6,7,8,9,10,11,12],
    green: [12,11,10,9,8,7,6,5,4,3,2],
    blue: [12,11,10,9,8,7,6,5,4,3,2]
  }
  const [player1Board, setPlayer1Board] = useState(gameBoard)
  const [player2Board, setPlayer2Board] = useState(gameBoard)
  const [gameMessage, setGameMessage] = useState('Placeholder Message')


  return (
    <div className='game'>
      <div className='player-container'>
        <Scoreboard player={1}/>
        <GameBoard />
      </div>
      <ActionBar 
      gameMessage={gameMessage}
      />
      <div className='player-container'>
        <Scoreboard player={2}/>
        <GameBoard />
      </div>
    </div>
  )
}

export default Game
