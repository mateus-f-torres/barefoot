import React from "react"
import ReactDOM from "react-dom"
import * as PusherPushNotifications from "@pusher/push-notifications-web"

import "./index.css"
import "./sw/register"

import App from "./components/App/App"

declare global {
  const PUSHER_INSTANCE_ID: string
}

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
      instanceId: PUSHER_INSTANCE_ID,
      serviceWorkerRegistration: registration,
    })

    beamsClient
      .start()
      .then(async () => await beamsClient.addDeviceInterest("debug-barefoot"))
      .then(() => console.log("Successfully registered and subscribed!"))
      .catch(console.error)
  })
  .catch(() => {})
