
import { useLanguage } from '../hooks/useLanguage.js'

export default function Carousel({ speed = 25 }) {
  const { t } = useLanguage()
  const items = t('leaders')
  return (
    <div className='relative overflow-hidden max-w-5xl mx-2 bg-white py-6 rounded-lg '>
      <div className='flex animate-scroll' style={{ '--speed': `${speed}s` }}>
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className='flex-shrink-0 w-60 mx-3 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-50 object-cover object-top bg-gray-100'
              style={{ maxHeight: '320px' }}
            />
            <div className='p-5 text-center'>
              <span className='inline-block px-3 py-1 text-xs font-semibold bg-gray-200 rounded-full mb-2'>
                {item.country}
              </span>
              <h3 className='font-bold text-xl mb-1'>{item.name}</h3>
              <p className='text-sm text-gray-600'>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
