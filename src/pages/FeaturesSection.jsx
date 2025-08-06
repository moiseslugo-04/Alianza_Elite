import {
  Users,
  TrendingUp,
  Target,
  MessageCircle,
  Award,
  Store,
  Star,
} from 'lucide-react'
import cardData from '../data/cards.json'
import { Card } from '../components/Card.jsx'
function FeaturesSection() {
  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-orange-50'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              7 Formas Reales de Generar{' '}
              <span className='text-red-500'>Ingresos </span> con
              <span className='text-green-700'> LiveGood</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-gray-800 to-orange-500 mx-auto mb-8'></div>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Un sistema de ganancias diseñado para quienes quieren construir un
              negocio inteligente, con ingresos activos y residuales, incluso si
              estás empezando desde cero.
            </p>
          </div>
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 '>
              {cardData?.features.map((card) => {
                const Icons = {
                  Users,
                  TrendingUp,
                  Target,
                  MessageCircle,
                  Award,
                  Store,
                  Star,
                }
                return <Card key={card.id} Icon={Icons[card.icon]} {...card} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

/**
 *
 */
