import { useState } from "react";
import type { ReactNode } from "react";
import type { Lang } from "../types/lang";
import { LanguageContext } from "./LanguageContext";

interface LanguageProviderProps {
  children: ReactNode
  initialLang?: Lang
}

export default function LanguageProvider({ children, initialLang = 'en'}: LanguageProviderProps) {
  const [ lang, setLang ] = useState<Lang>(initialLang)

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
