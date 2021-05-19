import React from "react"
import * as PusherPushNotifications from "@pusher/push-notifications-web"

import Button from "../Button/Button"

function App(): React.ReactElement {
  // TODO: move Pusher logic to separate file after single user auth is implemented
  async function handleSubscribe(): Promise<void> {
    const registration = await window.navigator?.serviceWorker.getRegistration()
    if (registration !== undefined) {
      const beamsClient = new PusherPushNotifications.Client({
        instanceId: PUSHER_INSTANCE_ID,
        serviceWorkerRegistration: registration,
      })

      beamsClient
        .start()
        .then(async () => await beamsClient.addDeviceInterest("debug-barefoot"))
        .then(() => console.log("Successfully registered and subscribed!"))
        .catch(console.error)
    } else {
      console.log("No service worker registered.")
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-24">
      <h1 className="font-body text-4xl font-bold text-regal-blue text-center">
        Hello World
      </h1>
      <Button handleClick={handleSubscribe} />
    </div>
  )
}

export default App
