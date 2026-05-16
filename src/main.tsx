import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router'
import './index.css'
import './config/i18n'
// TODO: Integrate LanguageProvider into PreferencesProvider.
import LanguageProvider from './context/LanguageProvider.tsx'
import { PreferencesProvider } from './context/PreferencesProvider.tsx'
import App from './App.tsx'
import Chooser from './Chooser.tsx'
import { Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PreferencesProvider>
        {/* TODO: Use user's preferred language (browser's). */}
        <LanguageProvider initialLang='en'>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/levels' element={<Chooser />} />
          </Routes>
        </LanguageProvider>
      </PreferencesProvider>
    </BrowserRouter>
  </StrictMode>,
)
