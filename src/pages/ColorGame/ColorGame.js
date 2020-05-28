import React from 'react'
import createGame from './utils/createGame'
import './ColorGame.css'

const SQUARES = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function ColorGame() {
  const game = React.useRef()
  const container = React.useRef()
  const [color, setColor] = React.useState('')

  React.useLayoutEffect(() => {
    game.current = createGame(container.current)
    resetGame()
  }, [container.current])

  function resetGame() {
    setColor(game.current.start())
  }

  function verifyGuess(e) {
    if (game.current.guess(e.target, color)) {
      setColor('')
      game.current.finish(color)
    } else {
      game.current.continue(e.target)
    }
  }

  return (
    <div className="colorGame">
      <h1 className="colorGame__title">
        The 100% original
        <br />
        Color Game
      </h1>
      {color ? <p className="colorGame__panel">{color}</p> : <p>Nice one!</p>}
      <div ref={container} className="colorGame__guesses">
        {SQUARES.map((i) => (
          <button
            key={i}
            className="colorGame__guesses__button"
            onClick={verifyGuess}
          />
        ))}
      </div>
      <button className="colorGame__resetButton" onClick={resetGame}>
        New Color
      </button>
    </div>
  )
}

export default ColorGame
