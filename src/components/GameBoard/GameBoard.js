import React from 'react'
import './GameBoard.css'

function GameBoard() {

  return (
    <div className='gameboard'>
      
      <section className='gameboard-row'>
        <p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p>
        <p>8</p><p>9</p><p>10</p><p>11</p><p>12</p><p>lock</p>
      </section>
      <section className='gameboard-row'>
        <p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p>
        <p>8</p><p>9</p><p>10</p><p>11</p><p>12</p><p>lock</p>
      </section>
      <section className='gameboard-row'>
        <p>12</p><p>11</p><p>10</p><p>9</p><p>8</p><p>7</p>
        <p>6</p><p>5</p><p>4</p><p>3</p><p>2</p><p>lock</p>
      </section>
      <section className='gameboard-row'>
        <p>12</p><p>11</p><p>10</p><p>9</p><p>8</p><p>7</p>
        <p>6</p><p>5</p><p>4</p><p>3</p><p>2</p><p>lock</p>
      </section>
      
    </div>
  )
}

export default GameBoard