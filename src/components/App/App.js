import React from 'react'
import {useTranslation} from 'react-i18next'

import './App.css'

const LANGS = ['en', 'pt', 'es', 'fr']
function getPseudoRandomLanguage(currentLang) {
  const filtered = LANGS.filter((lang) => lang != currentLang)
  const randomIndex = Math.floor(Math.random() * Math.floor(filtered.length))
  return filtered[randomIndex]
}

function App(props) {
  const {t, i18n} = useTranslation()

  React.useEffect(() => {
    setInterval(() => {
      const randomLanguage = getPseudoRandomLanguage(i18n.language)
      i18n.changeLanguage(randomLanguage)
    }, 10000)
  }, [])

  return (
    <div className="container">
      <h1 className="header">{t('common:friend_request')}</h1>

      <div className="form">
        <div>
          <label htmlFor="answer-yes">{t('inputs:yes')}</label>
          <input
            type="radio"
            name="answer"
            value="yes"
            id="answer-yes"
            data-testid="answer-yes"
            checked={props.yes}
            onChange={props.answerYes}
          />
          <label htmlFor="answer-no">{t('inputs:no')}</label>
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
          {t('inputs:random_answer')}
        </button>
      </div>
    </div>
  )
}

export default App
