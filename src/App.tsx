import './App.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import LanguageSelector from './LanguageSelector';

function App() {

  const { t } = useTranslation();

  return (
    <div className='app'>
      <div className='home-top'>
        <div className='top-bar'>
          <span className='material-icons-outlined'>settings</span>
          <span className='material-icons-outlined'>light_mode</span>
          <LanguageSelector />
        </div>
        <div className='title'>
          <small className='author'>Nano's</small>

          {/* I've not decided the name yet. */}
          <h1>Hear me out!</h1>

          <h2>{t('subtitle')}</h2>
        </div>
      </div>

      {/* We'll extract components later. */}
      <Link className='start' to='/levels'>{t('start')}</Link>

      {/* TODO: Add information in the footer. */}
      {/* This app is free (as in freedom) software, etc. */}
      <footer>{t('with-love.made')} <span className='love material-icons'>favorite</span> {t('with-love.in')} <span className='helix'>Helix</span>.</footer>
    </div>
  )
}

export default App
