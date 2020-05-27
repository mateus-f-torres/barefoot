import React from 'react'
import './ColorGame.css'

const EMPTY_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8]

// TODO: cleanup all of this

function getRandomHexColor() {
  return '#' + Math.random().toString(16).slice(2, 8).padStart(6, '0')
}

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length)
}

function ColorGame() {
  const [color, setColor] = React.useState('')
  const [squareColors, setSquareColors] = React.useState([])

  function verifyGuess(e) {
    if (e.target.dataset.color == color) {
      setColor('')
      document
        .querySelectorAll('.colorGame__square')
        .forEach((node) => node.style.setProperty('background-color', color))
    } else {
      e.target.style.setProperty('background-color', 'transparent')
    }
  }

  function resetGame() {
    const arrayOfColors = EMPTY_ARRAY.map(getRandomHexColor)
    const choosenColor = getRandomIndex(arrayOfColors)

    setSquareColors(arrayOfColors)
    setColor(arrayOfColors[choosenColor])
  }

  React.useLayoutEffect(() => {
    resetGame()
  }, [])

  return (
    <div className="colorGame">
      <h1>
        The 100% original
        <br />
        Color Game
      </h1>
      <p>
        <span>{color ? 'What color is this?' : 'Nice one!'}</span>
        <span className="color">{color}</span>
      </p>
      <div className="colorGame__guessBox">
        {squareColors.map((c) => (
          <button
            key={c}
            data-color={c}
            className="colorGame__square"
            style={{backgroundColor: c}}
            onClick={verifyGuess}
          />
        ))}
      </div>
      <button onClick={resetGame}>New Color</button>
    </div>
  )
}

export default ColorGame
