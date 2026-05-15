import { useState } from "react";
import { useTranslation } from "react-i18next"

import './LanguageSelector.css'

type Lang = 'en' | 'es'

interface LanguageField {
  name: string
  flag: string
  abbr: Lang
}

export default function LanguageSelector () {
  const { i18n } = useTranslation();
  const [ lang, setLang ] = useState<Lang>('en')
  const [ isOpen, setIsOpen ] = useState<boolean>(false)

  const handleLanguageChange = (newLang: Lang) => {
    setLang(newLang)
    i18n.changeLanguage(newLang)
    setIsOpen(false)
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const languages: LanguageField[] = [
    {
      name: 'English',
      flag: '🇬🇧',
      abbr: 'en'
    },
    {
      name: 'Español',
      flag: '🇪🇸',
      abbr: 'es'
    },
  ]

  const popupFields = languages.map(field => {
    return (
      <div onClick={() => handleLanguageChange(field.abbr)}>
        <span className='flag'>{field.flag}</span>
        <span className='current-lang'>{lang == field.abbr && "•"}</span>
        <span className='lang-name'>{field.name}</span>
      </div>
    )
  })

  return (
    <div className='lang-switcher' onClick={handleToggle}>
      <span className='material-icons-outlined' >translate</span>

      {isOpen && (
        <div className='lang-popup'>
          {popupFields}
        </div>
      )}
    </div>
  )
}
