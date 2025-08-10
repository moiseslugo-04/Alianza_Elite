import { CheckCircle } from 'lucide-react'
import { Icon } from './Icon'
import clsx from 'clsx'
export function Card({
  title,
  description,
  icon,
  bgGradient,
  borderColor,
  iconBg,
  titleColor,
  footerText,
  footerColor,
}) {
  return (
    <>
      <div
        className={clsx(
          'p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2',
          footerText ? 'border-l-4' : 'border',
          borderColor,
          bgGradient
        )}
      >
        <div
          className={clsx(
            'w-16 h-16 rounded-full flex items-center justify-center mb-4',
            footerText ? '' : 'mx-auto',
            iconBg
          )}
        >
          <Icon name={icon} className='w-8 h-8 text-white' />
        </div>
        <h3
          className={clsx(
            'text-xl font-bold mb-3',
            titleColor ?? 'text-gray-800'
          )}
        >
          {title}
        </h3>
        <p className='text-gray-600'>{description}</p>

        {footerText && (
          <div
            className={clsx(
              'flex items-center font-semibold mt-2',
              footerColor
            )}
          >
            <CheckCircle className='w-5 h-5 mr-2' />
            {footerText}
          </div>
        )}
      </div>
    </>
  )
}
