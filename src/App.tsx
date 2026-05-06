import './App.css'

function App() {

  return (
    <div className='app'>
      <div className='title'>
        <small className='author'>Nano's</small>

        {/* I've not decided the name yet. */}
        <h1>Hear me out!</h1>

        <h2>Ear training for everyone.</h2>
      </div>

      {/* We'll extract components later. */}
      <button id='start'>Start</button>

      <footer>Made with 💖 in <span className='helix'>Helix</span></footer>
    </div>
  )
}

export default App
