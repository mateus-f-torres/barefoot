import React from "react"
import ReactDOM from "react-dom"
import * as PusherPushNotifications from "@pusher/push-notifications-web"

import "./index.css"
import "./sw/register"

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

window.navigator.serviceWorker.ready
  .then((registration) => {
    const beamsClient = new PusherPushNotifications.Client({
      // TODO: use env
      instanceId: "542b5fae-8e7a-405b-8750-43086af04cb1",
      serviceWorkerRegistration: registration,
    })

    beamsClient
      .start()
      .then(async () => await beamsClient.addDeviceInterest("hello"))
      .then(() => console.log("Successfully registered and subscribed!"))
      .catch(console.error)
  })
  .catch(() => {})
