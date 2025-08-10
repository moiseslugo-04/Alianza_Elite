import { useState, useEffect } from 'react'
import { ChevronRight, Zap } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage.js'
function Hero() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])
  const titleParts = t('hero.title', { returnObjects: true })
  const SubtitleParts = t('hero.subtitle', { returnObjects: true })
  return (
    <section className='relative bg-gradient-to-br from-gray-800 via-gray-600 to-black text-white overflow-hidden '>
      <div className='absolute inset-0 bg-black opacity-20'></div>
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-700'></div>
      </div>

      <div className='relative container mx-auto px-6 py-20 lg:py-32'>
        <div className='max-w-4xl mx-auto text-center'>
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className='flex justify-center mb-6 '>
              <img
                src='/logo-alianza-elite.png'
                alt='Alianza Élite Logo'
                className='w-44 h-44 object-contain rounded-b-[50%] '
              />
            </div>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
              <span className='bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent'>
                {titleParts[0].text}
              </span>
              <br />
              <span className='text-white'> {titleParts[1].text}</span>
            </h1>

            <p className='text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed'>
              {SubtitleParts[0].text}{' '}
              <strong className='text-orange-400'>{t('name')}</strong>{' '}
              {SubtitleParts[1].text}{' '}
              <strong className='text-orange-400'>{t('company')}</strong>{' '}
              {SubtitleParts[2].text}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <button
                onClick={() =>
                  document
                    .getElementById('contacto')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className='group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-400 hover:to-red-400 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-2'
              >
                <Zap className='w-5 h-5' />
                {t('hero.joinUs')}
                <ChevronRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById('sobre-nosotros')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className='text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300'
              >
                {t('hero.knowMore')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-[0]'>
        <svg
          className='relative block w-[calc(100%+1.3px)] h-[130px]'
          viewBox='0 0 1440 130'
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V130H1380C1320 130 1200 130 1080 130C960 130 840 130 720 130C600 130 480 130 360 130C240 130 120 130 60 130H0Z'
            fill='white'
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
