import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import "./sw/register"

var Fail_CI = null;

import App from "./components/App/App"

const root = document.getElementById("root")

if (root !== null) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  )
}
