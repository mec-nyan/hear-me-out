// Maybe find a better name.
// Chooser will show a list of 'levels' to choose from.
// A 'level' includes some intervals (i.e. 4ths and 5ths).
// Most levels will be blocked by default.  As the user advances,
// she will unlock new levels.
//

import { Link } from "react-router"
import './Chooser.css'

// TODO: This will live on its own file/module.
interface Challenge {
  locked: boolean
  title: string
}

// These levels are just an exmaple.  It needs to be refined.
export default function Chooser() {
  const levels = [
    { locked: false, title: 'Ascendent and descendent'},
    { locked: false, title: 'Unisons and octaves.'},
    { locked: true, title: 'Minor and major seconds.'},
    { locked: true, title: 'Minor and major thirds.'},
    { locked: true, title: 'Fourths (just/augmented).'},
    { locked: true, title: 'Fifths (just/augmented/diminished).'},
    { locked: true, title: 'Minor and major sixths.'},
    { locked: true, title: 'Minor, major and diminished sevenths.'},
    { locked: true, title: 'Fourths and fifths'},
    { locked: true, title: 'Sixths and thirds'},
    { locked: true, title: 'Seconds and sevenths'},
  ]

  const levelDivs = levels.map((challenge) => {
    return (
      challenge.locked
      ?
      <div className='challenge locked'>
        <span className='icon-locked material-icons'>lock</span>
        <span className='challenge-title'>{challenge.title}</span>
        <span className='locked-hint'> ( locked )</span>
      </div>
      :
      <div className='challenge unlocked'>
        <span className='icon-unlocked material-icons'>lock_open</span>
        <span className='challenge-title'>{challenge.title}</span>
      </div>
    )
  })

  return (
    <div className='challenges'>
      <div className='top-nav'>
        <Link to='/'>
          <span className='icon-left material-icons'>arrow_back</span>
        </Link>
        <h1>Challenge</h1>
        <span className='help-icon material-icons'>question_mark</span>
      </div>

      <div className='challenge-group'>
        {levelDivs}
      </div>

    </div>
  )
}
