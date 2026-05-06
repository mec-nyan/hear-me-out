// Maybe find a better name.
// Chooser will show a list of 'levels' to choose from.
// A 'level' includes some intervals (i.e. 4ths and 5ths).
// Most levels will be blocked by default.  As the user advances,
// she will unlock new levels.
//

import { Link } from "react-router"

// These levels are just an exmaple.  It needs to be refined.
export default function Chooser() {
  const levels = [
    'unisons and octaves',
    'minor and major seconds',
    'minor and major thirds',
    'fourths (just/augmented)',
    'fifths (just/augmented/diminished)',
    'minor and major sixths',
    'minor, major and diminished sevenths'
  ]

  const levelDivs = levels.map((lvl) => {
    return <div className='lvl'>{lvl}</div>
  })

  return (
    <div className='levels'>
      <div className='top-nav'>
        {/* TODO: Add icons. */}
        <Link className='back' to='/'>{"<-"}</Link>
        <h1>Level</h1>
      </div>

      {levelDivs}

    </div>
  )
}
