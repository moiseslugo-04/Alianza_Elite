import { Card } from '../components/Card'
import { useLanguage } from '../hooks/useLanguage.js'
function About() {
  const { t } = useLanguage()
  const titleParts = t('about.title', { returnObjects: true })
  const subtitleParts = t('about.subtitle', { returnObjects: true })
  return (
    <section id='sobre-nosotros' className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              <span className='text-gray-800'> {titleParts[0].text} </span>{' '}
              <span className='text-orange-500'>{titleParts[1].text}</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-gray-800 to-orange-500 mx-auto mb-8'></div>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              {subtitleParts[0].text}{' '}
              <strong className='text-gray-800'>
                {' '}
                {subtitleParts[1].text}
              </strong>{' '}
              {subtitleParts[2].text}
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            {t('about.cards').map((card) => {
              return <Card key={card.title} {...card} icon={card.icon} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
