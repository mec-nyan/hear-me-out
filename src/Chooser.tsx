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
  completed: boolean
  title: string
}

// These levels are just an exmaple.  It needs to be refined.
export default function Chooser() {
  const levels = [
    { locked: false, completed: true, title: 'Ascendent and descendent'},
    { locked: false, completed: false, title: 'Unisons and octaves.'},
    { locked: true, completed: false, title: 'Minor and major seconds.'},
    { locked: true, completed: false, title: 'Minor and major thirds.'},
    { locked: true, completed: false, title: 'Fourths (just/augmented).'},
    { locked: true, completed: false, title: 'Fifths (just/augmented/diminished).'},
    { locked: true, completed: false, title: 'Minor and major sixths.'},
    { locked: true, completed: false, title: 'Minor, major and diminished sevenths.'},
    { locked: true, completed: false, title: 'Fourths and fifths'},
    { locked: true, completed: false, title: 'Sixths and thirds'},
    { locked: true, completed: false, title: 'Seconds and sevenths'},
  ]

  const levelDivs = levels.map((challenge) => {
    return (
      challenge.locked
      ?
      <div className='challenge locked'>
        <span className='icon-locked material-icons'>lock</span>
        <div className='title-group'>
          <span className='hint-locked'>[ Locked ]</span>
          <span className='challenge-title'>{challenge.title}</span>
        </div>
      </div>
      :
      <div className='challenge unlocked'>
        <span className='icon-unlocked material-icons'>lock_open</span>
        <div className='title-group'>
          {/* TODO: Let the user know she will unlock the following levels by playing these first. */}
          {
            challenge.completed
            ?
            <span className='hint-done'>[ Completed ]</span>
            :
            <span className='hint-try'>Try now!</span>
          }
          <span className='challenge-title'>{challenge.title}</span>
        </div>
      </div>
    )
  })

  return (
    <div className='challenges'>
      {/* TODO: We may want to add a paragraph here, i.e. "Choose your next challenge..."
      or something. */}
      <div className='top-nav'>
        <Link to='/'>
          <span className='icon-left material-icons'>arrow_back</span>
        </Link>
        <span className='top-title'>Challenges</span>
        <span className='help-icon material-icons'>question_mark</span>
      </div>

      <div className='challenge-group'>
        {levelDivs}
      </div>

    </div>
  )
}
