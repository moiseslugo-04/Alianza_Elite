import { Icon } from '../components/Icon'
import { useContact } from '../hooks/useContact'
import { useLanguage } from '../hooks/useLanguage.js'

function Contact() {
  const { t } = useLanguage()
  const { handleSubmit, handleInputChange, formData } = useContact()
  const titleParts = t('contact.title', { returnObjects: true })
  return (
    <section
      id='contacto'
      className='py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
    >
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              {titleParts[0].text}{' '}
              <span className='text-orange-400'> {titleParts[1].text}</span>
              {titleParts[2].text}
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8'></div>
            <p className='text-xl text-orange-600 max-w-2xl mx-auto'>
              {t('contact.description')}
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-lg font-semibold mb-2 text-gray-100'
                  >
                    {t('contact.form.labelSponsor')}
                  </label>
                  <input
                    type='text'
                    id='sponsor'
                    name='sponsor'
                    value={formData.sponsor}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-2 border-transparent focus:border-orange-400 focus:outline-none transition-all duration-300'
                    placeholder='patrocinador o líder'
                  />
                </div>

                <div>
                  <label
                    htmlFor='name'
                    className='block text-lg font-semibold mb-2 text-gray-100'
                  >
                    {t('contact.form.labelName')}
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-2 border-transparent focus:border-orange-400 focus:outline-none transition-all duration-300'
                    placeholder='Tu nombre completo'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-lg font-semibold mb-2 text-gray-100'
                  >
                    {t('contact.form.labelEmail')}
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-2 border-transparent focus:border-orange-400 focus:outline-none transition-all duration-300'
                    placeholder='tu@email.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-lg font-semibold mb-2 text-gray-100'
                  >
                    {t('contact.form.labelSponsorPhone')}
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-2 border-transparent focus:border-orange-400 focus:outline-none transition-all duration-300'
                    placeholder='+1 (555) 123-4567'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-orange-400 hover:to-red-400 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2'
                >
                  <Icon name='send' className='w-5 h-5' />
                  {t('contact.form.sendByWhatsapp')}
                </button>
              </form>
            </div>

            <div className='space-y-8'>
              <div className='bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm'>
                <h3 className='text-2xl font-bold mb-4 text-orange-400'>
                  {t('contact.whyJoin.ask')}
                </h3>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-3'>
                    <Icon
                      name='checkCircle'
                      className='w-6 h-6 text-orange-400 flex-shrink-0'
                    />
                    <span> {t('contact.whyJoin.one')}</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <Icon
                      name='checkCircle'
                      className='w-6 h-6 text-orange-400 flex-shrink-0'
                    />
                    <span> {t('contact.whyJoin.two')}</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <Icon
                      name='checkCircle'
                      className='w-6 h-6 text-orange-400 flex-shrink-0'
                    />
                    <span>{t('contact.whyJoin.three')}</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <Icon
                      name='checkCircle'
                      className='w-6 h-6 text-orange-400 flex-shrink-0'
                    />
                    <span>{t('contact.whyJoin.four')}</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <Icon
                      name='checkCircle'
                      className='w-6 h-6 text-orange-400 flex-shrink-0'
                    />
                    <span>{t('contact.whyJoin.five')}</span>
                  </li>
                </ul>
              </div>

              <div className='text-center'>
                <p className='text-gray-200 mb-4'>
                  {t('contact.contactWithUs')}
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <a
                    href='mailto:info@alianzaelite.com'
                    className='flex items-center gap-2 bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors'
                  >
                    <Icon name='email' className='w-5 h-5' />
                    Email
                  </a>
                  <a
                    href='https://wa.me/+5583991346039'
                    target='_blank'
                    className='flex items-center gap-2 bg-green-600 px-6 py-3 rounded-lg hover:bg-green-500 transition-colors'
                  >
                    <Icon name='messageCircle' className='w-5 h-5' />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
