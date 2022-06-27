import React from 'react'
import './ActionBar.css'

function ActionBar({ gameMessage }) {


  return (
    <section className='action-bar'>
      <h2 className='game-message'>{gameMessage}</h2>
      <div className='button-container'>
        <button>Directions</button>
        <button>Roll Dice</button>
      </div>
      <div className='points-table-container'>
        <p className='points-vertical'>points</p>
        <table>
          <tbody>
            <tr>
              <td>1x</td>
              <td>2x</td>
              <td>3x</td>
              <td>4x</td>
              <td>5x</td>
              <td>6x</td>
              <td>7x</td>
              <td>8x</td>
              <td>9x</td>
              <td>10x</td>
              <td>11x</td>
              <td>12x</td>
            </tr>
            <tr>
              <td>1</td>
              <td>3</td>
              <td>6</td>
              <td>10</td>
              <td>15</td>
              <td>21</td>
              <td>28</td>
              <td>36</td>
              <td>45</td>
              <td>55</td>
              <td>66</td>
              <td>78</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ActionBar