// @ts-nocheck
if ("serviceWorker" in navigator && PRODUCTION) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(console.log, console.error)
  })
}
