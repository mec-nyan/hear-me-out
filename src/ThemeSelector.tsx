import { usePreferences } from "./hooks/usePreferencs";

export default function ThemeSelector() {
  const { theme, setTheme } = usePreferences();

  return (
    <div
      className='theme-switcher'
      onClick={() => setTheme(theme === 'dark' ? 'light': 'dark')}>
      <span className='material-icons-outlined'>{theme == 'dark' ? 'light_mode' : 'dark_mode'}</span>
    </div>
  )
}
