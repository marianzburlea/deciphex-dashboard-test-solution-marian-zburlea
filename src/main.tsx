import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import { App } from './component'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('dashboard')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )
} else {
  throw new Error('dashboard id is missing in <div id="dashboard"></div>')
}
