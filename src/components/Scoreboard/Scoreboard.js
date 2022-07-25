import React from 'react'
import './Scoreboard.css'

function Scoreboard({ player }) {



  return (
    <div className='scoreboard-container'>
      <h3 className='player-number'>Player {player}</h3>
      <section className='scoreboard'>
        <div>
          <p className='score'>Placeholder: Total Score</p>
        </div>
        <div className='strike-container'>
          <div id='1'>X</div>
          <div id='2'>X</div>
          <div id='3'>X</div>
          <div id='4'>X</div>
        </div>
      </section>
    </div>
  )
}

export default Scoreboard