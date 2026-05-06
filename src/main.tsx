import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import Chooser from './Chooser.tsx'
import { Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/levels' element={<Chooser />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
