import { useState } from 'react'
import MemoryCard from './MemoryCard'
import _ from 'lodash'
import './App.css'
import React from 'react'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clicked, setClicked] = useState(new Array(17).fill(false))

  function loseGame() {
    document.documentElement.className = 'lost-game';
    setTimeout(() => document.documentElement.className = '', 1000);
    console.log("lost!");
  }

  function cardClick(id) {
    if (clicked[id]) {
      setClicked(new Array(31).fill(false))
      setScore(0)
      loseGame()
    }
    else {
      clicked[id] = true;
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1)
      }
    }
  }

  function shuffle(list) {
    return list.map(value => ({ value, sort: Math.random() }))
               .sort((a, b) => a.sort - b.sort)
               .map(({ value }) => value)
  }

  let items = _.range(1, 30).map((itemId) => <MemoryCard key={itemId} id={itemId} onCardClick={cardClick} />)

  return (
    <>
      <div className='header'>
        <div className="title">
          <div className="heading">Memory Cards</div>
          <div className="description">click on a different pokemon every time</div>
        </div>
        <div className='scores'>
          <div className='score'>Score: <span>{score}</span></div>
          <div className='best-score'>Best Score: {bestScore}</div>
        </div>
      </div>
      <div className='cards'>
        {shuffle(items).slice(0,16)}
      </div>
    </>
  )
}

export default App
