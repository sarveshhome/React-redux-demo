import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartComponent from './components/CartComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CartComponent />
  </StrictMode>,
)
