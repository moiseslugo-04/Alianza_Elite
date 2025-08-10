import { Icon } from '../components/Icon'
import { useLanguage } from '../hooks/useLanguage.js'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-3 mb-6'>
              <img
                src='/logo-alianza-elite.png'
                alt='Alianza Élite Logo'
                className='w-12 h-12 object-contain'
              />
              <div>
                <h3 className='text-3xl font-bold'>
                  <span className='text-gray-300'>{t('footer.span1')}</span>{' '}
                  <span className='text-orange-500'>{t('footer.span2')}</span>
                </h3>
                <p className='text-gray-400'>{t('footer.text')}</p>
              </div>
            </div>
            <p className='text-gray-300 mb-6 max-w-md'>
              {t('footer.description')}
            </p>
            <div className='flex gap-4'>
              <a
                href='#'
                className='bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition-colors'
              >
                <Icon name={'facebook'} className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='bg-pink-600 p-3 rounded-full hover:bg-pink-500 transition-colors'
              >
                <Icon name='instagram' className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='bg-blue-700 p-3 rounded-full hover:bg-blue-600 transition-colors'
              >
                <Icon name={'youtube'} className='w-5 h-5' />
              </a>
            </div>
          </div>

          <div>
            <h4 className='text-xl font-bold mb-6 text-orange-400'>
              {t('footer.services.title')}
            </h4>
            <ul className='space-y-3 text-gray-300'>
              <li>
                <a href='#' className='hover:text-orange-400 transition-colors'>
                  {t('footer.services.one')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-400 transition-colors'>
                  {t('footer.services.two')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-400 transition-colors'>
                  {t('footer.services.three')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-400 transition-colors'>
                  {t('footer.services.four')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-400 transition-colors'>
                  {t('footer.services.five')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-xl font-bold mb-6 text-orange-400'>
              {t('footer.contact')}
            </h4>
            <ul className='space-y-4 text-gray-300'>
              <li className='flex items-center gap-3'>
                <Icon name='email' className='w-5 h-5 text-orange-400' />
                <a
                  href='mailto:info@alianzaelite.com'
                  className='hover:text-orange-400 transition-colors'
                >
                  info@alianzaelite.com
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <Icon name='phone' className='w-5 h-5 text-orange-400' />
                <a
                  href='tel:+5583991346039'
                  className='hover:text-orange-400 transition-colors'
                >
                  +55 (83) 991346039
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <Icon
                  name='messageCircle'
                  className='w-5 h-5 text-orange-400'
                />
                <a
                  href='https://wa.me/1234567890'
                  className='hover:text-orange-400 transition-colors'
                >
                  WhatsApp
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <Icon name='mapPin' className='w-5 h-5 text-orange-400 mt-1' />
                <span> {t('footer.services.country')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8 text-center'>
          <p className='text-gray-400'>
            © 2025 Alianza Élite – Todos los derechos reservados. Unidos para
            crecer más rápido.
            <span className='text-orange-400 font-semibold'>
              {' '}
              Juntos es mejor. Formando líderes libres y prósperos.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
