import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage.js'

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  console.log(language, 'lant')
  const languages = [
    { code: 'es', label: 'Spanish', flag: 'es' },
    { code: 'en', label: 'English', flag: 'en' },
    { code: 'pt', label: 'Portuguese', flag: 'pt' },
  ]
  const currentLanguage = languages.find((lang) => {
    console.log(lang.code, language)
    return lang.code === language
  })
  return (
    <div className='fixed  top-4 right-4 z-50'>
      <div className='relative'>
        <button
          onClick={() => setOpen(!open)}
          className='flex items-center gap-2 bg-white/90 backdrop-bluer-sm  rounded-lg p-2 shadow-lg font-medium '
        >
          <span className='text-sm'>{currentLanguage.code}</span>
          <span className=''>{currentLanguage.label}</span>
        </button>
        {open && (
          <ul className='absolute flex-col gap-4 top-12 right-0 bg-white rounded-md overflow-hidden shadow-md animate-fade-in'>
            {languages.map(({ code, label, flag }) => {
              return (
                <li
                  onClick={() => {
                    setLanguage(code)
                    setOpen(false)
                  }}
                  key={code}
                  className={`flex gap-2 items-center cursor-pointer py-2 px-4 ${
                    language === code ? 'bg-gray-200 font-bold' : ''
                  }`}
                >
                  <span className='text-lg'>{flag}</span>
                  {label}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
