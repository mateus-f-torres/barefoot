import React from 'react'

import './App.css'

function App(props) {
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
            checked={props.yes}
            onChange={props.answerYes}
          />
          <label htmlFor="answer-no">No</label>
          <input
            type="radio"
            name="answer"
            value="no"
            id="answer-no"
            data-testid="answer-no"
            checked={props.no}
            onChange={props.answerNo}
          />
        </div>
        <button
          onClick={props.getRandomAnswer}
          type="button"
          data-testid="random_answer"
        >
          Random Answer
        </button>
      </div>
    </div>
  )
}

export default App
