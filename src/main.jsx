import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainMenu from './MainMenu.jsx'
import Counter from './Counter.jsx'
import CSSTraditionalPage from './pages/CSS Traditional/CSSTraditionalPage.jsx'
import CSSModulePage from './pages/CSS Modules/CSSModulePage.jsx'
import StyledComponentPage from './pages/Styled Component/StyledComponentPage.jsx'
import EmotionStylePage from './pages/Emotion Styled Component/EmotionStylePage.jsx'
import InlineStyledPage from './pages/Inline Styled/InlineStyledPage.jsx'
import Home from './pages/TailwindCSS/Home.jsx'
import CommercePage from './pages/Commerce/CommercePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Kita memasukan seluruh UI */}
    {/* <App /> */}
    {/* <MainMenu /> */}
    {/* <Counter /> */}
    {/* <CSSTraditionalPage /> */}
    {/* <CSSModulePage /> */}
    {/* <StyledComponentPage /> */}
    {/* <EmotionStylePage /> */}
    {/* <InlineStyledPage /> */}
    {/* <Home /> */}
    <CommercePage />
  </StrictMode>,
)
