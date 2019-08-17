import React from 'react'
// TODO: change to simple i18next import
import {useTranslation} from 'react-i18next'

import './App.css'
import list from '../../assets/images/list.svg'
import logo from '../../assets/images/mateus-f-torres.svg'

import TodoListContainer from '../TodoList/TodoListContainer'

function App({fetchRandomActivity}) {
  const {t} = useTranslation()

  return (
    <div className="container">
      <h1 className="header">
        {t('app_title')}
        <button className="iconBtn" onClick={fetchRandomActivity}>
          <img className="iconImg" src={list} />
        </button>
      </h1>

      <TodoListContainer />

      <footer className="footer">
        <h1>{t('madeby')}</h1>
        <a href="https://mateus-f-torres.github.io/">
          <img className="logo" src={logo} />
        </a>
      </footer>
    </div>
  )
}

export default App
