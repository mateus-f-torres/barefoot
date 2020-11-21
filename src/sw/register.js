// TODO: use webpack env plugin to bail in NODE_ENV=development
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(console.log, console.error)
  })
}
