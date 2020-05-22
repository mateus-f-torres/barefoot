import React from 'react'

import request from '../../utils/request'
import {RANDOM_ANSWER} from '../../utils/urls'
import ColorGame from '../../games/ColorGame/ColorGame'

import './App.css'

function App(props) {
  const [state, setState] = React.useState({yes: false, no: false})

  const handleYes = () => setState({yes: true, no: false})
  const handleNo = () => setState({yes: false, no: true})

  function getRandomAnswer() {
    request(RANDOM_ANSWER).then((res) => {
      res.answer == 'yes' ? handleYes() : handleNo()
    })
  }

  return (
    <div className="container">
      <h1 className="header">Do you want to be my friend ?</h1>

      <div className="form">
        <div>
          <label htmlFor="answer-yes">Yes</label>
          <input
            type="radio"
            name="answer"
            value="yes"
            id="answer-yes"
            data-testid="answer-yes"
            checked={state.yes}
            onChange={handleYes}
          />
          <label htmlFor="answer-no">No</label>
          <input
            type="radio"
            name="answer"
            value="no"
            id="answer-no"
            data-testid="answer-no"
            checked={state.no}
            onChange={handleNo}
          />
        </div>
        <button
          onClick={getRandomAnswer}
          type="button"
          data-testid="random_answer"
        >
          Random Answer
        </button>
      </div>

      <ColorGame />
    </div>
  )
}

export default App
