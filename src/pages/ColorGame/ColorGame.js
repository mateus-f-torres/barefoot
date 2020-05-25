import React from 'react'
import './ColorGame.css'

const EMPTY_ARRAY = [0, 1, 2, 3, 4, 5]

function getRandomHexColor() {
  return '#' + (Math.random() * 16).toString(16).slice(2, 8).padStart(6, '0')
}

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length)
}

function ColorGame() {
  const [color, setColor] = React.useState('')
  const [squareColors, setSquareColors] = React.useState([])

  function verifyGuess(e) {
    console.log(e.target.dataset.color == color)
  }

  function resetGame() {
    const arrayOfColors = EMPTY_ARRAY.map(getRandomHexColor)
    const choosenColor = getRandomIndex(arrayOfColors)

    setSquareColors(arrayOfColors)
    setColor(arrayOfColors[choosenColor])
  }

  return (
    <div>
      <h1>{color}</h1>
      <h2>Guess the correct color</h2>
      <button onClick={resetGame}>Start</button>
      <p>some rules</p>

      {squareColors.map((c) => (
        <button
          key={c}
          data-color={c}
          className="square"
          style={{backgroundColor: c}}
          onClick={verifyGuess}
        />
      ))}
    </div>
  )
}

export default ColorGame
