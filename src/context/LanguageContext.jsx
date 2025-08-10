import { createContext, useState } from 'react'
import en from '../locales/en.json'
import es from '../locales/es.json'
import pt from '../locales/pt.json'

const translations = { en, es, pt }
export const LanguageContext = createContext()
export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es')

  const t = (key) => {
    return key
      .split('.')
      .reduce((obj, k) => obj?.[k], translations[language] || key)
  }
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
