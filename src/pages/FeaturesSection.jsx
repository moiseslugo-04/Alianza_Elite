import { Card } from '../components/Card.jsx'
import { useLanguage } from '../hooks/useLanguage.js'

function FeaturesSection() {
  const { t } = useLanguage()
  const titleParts = t('features.title', { returnObjects: true })
  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-orange-50'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              {titleParts[0].text}{' '}
              <span className='text-red-500'>{titleParts[1].text} </span>{' '}
              {titleParts[2].text}
              <span className='text-green-700'> {t('company')} </span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-gray-800 to-orange-500 mx-auto mb-8'></div>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              {t('features.description')}
            </p>
          </div>
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 '>
              {t('features.cards').map((card) => {
                return <Card key={card.id} icon={card.icon} {...card} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
