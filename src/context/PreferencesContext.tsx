import { createContext } from "react";

export type Theme = 'dark' | 'light'
export type Font = 'serif' | 'sans-serif'

export interface Preferences {
  theme: Theme
  font: Font
  setTheme: (theme: Theme) => void
  setFont: (font: Font) => void
}

export const PreferencesContext = createContext<Preferences | undefined>(undefined)
