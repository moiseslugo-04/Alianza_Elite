import { Calendar } from 'lucide-react'
import { EventCard } from '../components/EventCard'
import cardData from '../data/cards.json'
function UpcomingEvents() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Próximas <span className='text-gray-800'>Presentaciones</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-gray-800 to-orange-500 mx-auto mb-8'></div>
            <p className='text-xl text-gray-600'>
              Descubre cómo usar herramientas modernas y maximizar tu potencial
              en LiveGood
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {cardData.events.map((event) => {
              return <EventCard key={event.topic} {...event} />
            })}
          </div>

          <div className='text-center mt-12'>
            <p className='text-gray-600 text-lg mb-6'>
              ¡No te pierdas estas oportunidades de aprendizaje! Cada sesión es
              única e irrepetible.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById('contacto')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-xl'
            >
              Reservar mi Lugar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
