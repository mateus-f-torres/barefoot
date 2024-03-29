import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './sw/register'

import App from './components/App/App'

const root = document.getElementById('root')

if (root !== null) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
