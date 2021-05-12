import React from "react"
import * as PusherPushNotifications from "@pusher/push-notifications-web"

declare global {
  const PUSHER_INSTANCE_ID: string
}

function App(): React.ReactElement {
  async function handleSubscribe(): Promise<void> {
    const swRegistration = await window.navigator.serviceWorker.getRegistration()
    if (swRegistration !== undefined) {
      const beamsClient = new PusherPushNotifications.Client({
        instanceId: "542b5fae-8e7a-405b-8750-43086af04cb1",
        // instanceId: PUSHER_INSTANCE_ID,
        serviceWorkerRegistration: swRegistration,
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
      <button onClick={handleSubscribe}>Subscribe!</button>
    </div>
  )
}

export default App
