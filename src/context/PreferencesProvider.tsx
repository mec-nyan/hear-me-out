import { useEffect, useState, type ReactNode } from "react";
import type React from "react";
import { PreferencesContext, type Font, type Theme } from "./PreferencesContext";

interface PreferencesProviderProps {
  children: ReactNode
}

export function PreferencesProvider({ children }: PreferencesProviderProps) {
  const [ theme, setTheme ] = useState<Theme>('dark')
  const [ font, setFont ] = useState<Font>('sans-serif')
  const [ isLoaded, setIsLoaded ] = useState(false)

  // Load user preferences on mount.
  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'dark'
    const savedFont = (localStorage.getItem('font') as Font) || 'sans-serif'
    setTheme(savedTheme)
    setFont(savedFont)
    setIsLoaded(true)
  }, [])

  // Update local storage and apply custom CSS.
  useEffect(() => {
    if (!isLoaded) return

    localStorage.setItem('theme', theme)
    localStorage.setItem('font', font)

    // Apply to root element.
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('data-font', font)
  }, [theme, font, isLoaded])

  return (
    <PreferencesContext.Provider value={{ theme, font, setTheme, setFont }}>
      {children}
    </PreferencesContext.Provider>
  )
}
