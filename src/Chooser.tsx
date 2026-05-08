// Maybe find a better name.
// Chooser will show a list of 'levels' to choose from.
// A 'level' includes some intervals (i.e. 4ths and 5ths).
// Most levels will be blocked by default.  As the user advances,
// she will unlock new levels.
//

import { Link } from "react-router"
import './Chooser.css'

// These levels are just an exmaple.  It needs to be refined.
export default function Chooser() {
  const levels = [
    'Ascendent and descendent',
    'Unisons and octaves.',
    'Minor and major seconds.',
    'Minor and major thirds.',
    'Fourths (just/augmented).',
    'Fifths (just/augmented/diminished).',
    'Minor and major sixths.',
    'Minor, major and diminished sevenths.',
    'Fourths and fifths',
    'Sixths and thirds',
    'Seconds and sevenths',
  ]

  const levelDivs = levels.map((lvl) => {
    // TODO: Add an overlay div with a 'blocked' icon (i.e.  ) and make the item greyed out
    // for the locked levels.
    return <div className='lvl'>{lvl}</div>
  })

  return (
    <div className='levels'>
      <div className='top-nav'>
        {/* TODO: Add icons. */}
        <Link className='back' to='/'>←</Link>
        <h1>Level</h1>
        <span className='icon-filler'></span>
      </div>

      <div className='lvl-group'>
        {levelDivs}
      </div>

    </div>
  )
}
