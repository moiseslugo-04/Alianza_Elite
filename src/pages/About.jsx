import { Users, TrendingUp, Award } from 'lucide-react'
import cardData from '../data/cards.json'
import {Card} from '../components/Card'
function About() {
  return (
    <section id='sobre-nosotros' className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              <span className='text-gray-800'>Plan de Crecimiento </span>{' '}
              <span className='text-orange-500'>Garantizado</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-gray-800 to-orange-500 mx-auto mb-8'></div>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              Somos un grupo exclusivo de{' '}
              <strong className='text-gray-800'>líderes experimentados</strong>{' '}
              dentro de LiveGood, dedicados a formar la próxima generación de
              líderes exitosos.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            {cardData.about.map((card) => {
              const Icons = { Users, TrendingUp, Award }
              return <Card key={card.title} {...card} Icon={Icons[card.icon]} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
