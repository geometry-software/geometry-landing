import { createContext, useContext, useState, useEffect } from "react"
import { translations } from "../i18n/translations"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const getBrowserLang = () =>
    navigator.language.startsWith("es")
      ? "es"
      : navigator.language.startsWith("pt")
      ? "pt"
      : "en"

  const [lang, setLang] = useState(getBrowserLang())

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
