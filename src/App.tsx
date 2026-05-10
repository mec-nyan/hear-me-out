import './App.css'
import { Link } from 'react-router'

function App() {

  return (
    <div className='app'>
      <div className='home-top'>
        <div className='top-bar'>
          <span className='material-icons-outlined'>settings</span>
          <span className='material-icons-outlined'>light_mode</span>
          <span className='material-icons-outlined' >translate</span>
        </div>
        <div className='title'>
          <small className='author'>Nano's</small>

          {/* I've not decided the name yet. */}
          <h1>Hear me out!</h1>

          <h2>Ear training for everyone.</h2>
        </div>
      </div>

      {/* We'll extract components later. */}
      <Link className='start' to='/levels'>Start</Link>

      {/* TODO: Add information in the footer. */}
      {/* This app is free (as in freedom) software, etc. */}
      <footer>Made with <span className='love material-icons'>favorite</span> in <span className='helix'>Helix</span>.</footer>
    </div>
  )
}

export default App
