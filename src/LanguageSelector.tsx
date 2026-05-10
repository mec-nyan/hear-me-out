import { useState } from "react";
import { useTranslation } from "react-i18next"

export default function LanguageSelector () {
  const { i18n } = useTranslation();

  // TODO: Add a proper selector.
  type Lang = 'en' | 'es'
  const [ lang, setLang ] = useState<Lang>('en')

  const handleTouch = () => {
    if (lang == 'en') {
      setLang('es')
    } else {
      setLang('en')
    }
    i18n.changeLanguage(lang)
  }
  return (
    <div className='lang-switcher' onClick={handleTouch}>
      <span className='material-icons-outlined' >translate</span>
    </div>
  )
}
