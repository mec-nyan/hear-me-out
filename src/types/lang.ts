export type Lang = 'en' | 'es'

export interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

export interface LanguageField {
  name: string
  flag: string
  abbr: Lang
}
