import { createContext, useEffect, useState } from 'react'
import en from '../locales/en.json'
import es from '../locales/es.json'
import pt from '../locales/pt.json'

const translations = { en, es, pt }
export const LanguageContext = createContext()
export default function LanguageProvider({ children }) {
  const getInitialLanguage = () => {
    const saveLang = JSON.parse(localStorage.getItem('lang'))
    if (saveLang) {
      return saveLang
    }

    // if there's not get the lang of user preferences
    const browserLang = navigator.language.slice(0, 2)
    if (translations[browserLang]) {
      return browserLang
    }
    return 'es'
  }
  const [language, setLanguage] = useState(getInitialLanguage)
  const t = (key) => {
    return key
      .split('.')
      .reduce((obj, k) => obj?.[k], translations[language] || key)
  }

  // save the Lang to localStorage every time it change
  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(language))
  }, [language])
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
