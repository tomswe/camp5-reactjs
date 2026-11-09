import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainMenu from './MainMenu.jsx'
import Counter from './Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Kita memasukan seluruh UI */}
    {/* <App /> */}
    {/* <MainMenu /> */}
    <Counter />
  </StrictMode>,
)
