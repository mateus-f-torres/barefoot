import React from 'react'
// TODO: change to simple i18next import
import {useTranslation} from 'react-i18next'

import './App.css'
import list from '../../assets/images/list.svg'
import logo from '../../assets/images/mateus-f-torres.svg'

import TodoListContainer from '../TodoList/TodoListContainer'

const LANGS = ['en', 'pt', 'es', 'fr', 'ja']

function App({fetchRandomActivity}) {
  const {t, i18n} = useTranslation()

  React.useEffect(() => {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * Math.floor(LANGS.length))
      const randomLang = LANGS[randomIndex]
      i18n.changeLanguage(randomLang)
    }, 10000)
  }, [])

  return (
    <div className="container">
      <h1 className="header">
        Todo App
        <button className="iconBtn" onClick={fetchRandomActivity}>
          <img className="iconImg" src={list} />
        </button>
      </h1>

      <TodoListContainer />

      <footer className="footer">
        <h1>{t('made_by')}</h1>
        <a href="https://mateus-f-torres.github.io/">
          <img className="logo" src={logo} />
        </a>
      </footer>
    </div>
  )
}

export default App
