import { usePreferences } from './hooks/usePreferencs';
import './FontSelector.css'

export default function FontSelector() {
  const { font, setFont} = usePreferences();

  return (
    <div
      className='theme-switcher'
      onClick={() => setFont(font=== 'serif' ? 'sans-serif': 'serif')}>
      <span className='font-selector'>A</span>
    </div>
  )
}
