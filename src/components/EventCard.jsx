import { Calendar } from 'lucide-react'
import { DateTime } from 'luxon'
import clsx from 'clsx'

export function EventCard({ day, type, topic, highlight, bgGradient }) {
  const eventInEcuador = DateTime.fromObject(
    { year: 2025, month: 8, day: 6, hour: 20, minute: 0 }, // 8:00 PM
    { zone: 'America/Guayaquil' }
  )
  const eventInLocal = eventInEcuador.setZone(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )

  const localTimeString = eventInLocal.toLocaleString(DateTime.TIME_SIMPLE) // Ej: 10:00 PM
  return (
    <div
      className={`${clsx('text-white p-8 rounded-2xl shadow-2xl', bgGradient)}`}
    >
      <div className='flex items-center mb-6'>
        <div className='bg-orange-500 p-3 rounded-full mr-4'>
          <Calendar className='w-8 h-8 text-white' />
        </div>
        <div>
          <h3 className='text-2xl font-bold'>{day}</h3>
          <p className='text-gray-300'>{day}</p>
        </div>
      </div>
      <div className='space-y-3'>
        <div className='flex justify-between items-center'>
          <span className='text-lg'>Horario:</span>
          <span className='text-xl font-bold text-orange-400'>
            {localTimeString}
            <span className='text-sm text-white '> (Hora local)</span>
          </span>
        </div>

        <div className='flex justify-between mt-3'>
          <span className='text-lg '>Tema:</span>
          <span className='text-sm text-gray-300 text-right'>{topic}</span>
        </div>
      </div>
      <div className='flex justify-center  mt-8'>
        <span className='text-lg font-bold text-white text-center'>
          {highlight}
        </span>
      </div>
    </div>
  )
}
