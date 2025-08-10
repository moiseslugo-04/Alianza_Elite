import { LightboxModal } from '../components/LightboxModal'
import { useGallery } from '../hooks/useGallery'
import { useLanguage } from '../hooks/useLanguage'
export default function Gallery() {
  const {
    openLightbox,
    closeLightbox,
    prev,
    next,
    isOpen,
    images,
    currentImage,
  } = useGallery()
  const { t } = useLanguage()
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-3xl font-extrabold text-center mb-8'>{t('teams')}</h2>

      {/* Grid responsive */}
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className='group overflow-hidden rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            aria-label={`Abrir imagen ${i + 1}`}
          >
            <div className='relative h-56 sm:h-48 md:h-56 lg:h-64 w-full'>
              <img
                src={img.src}
                alt={img.alt || `Imagen ${i + 1}`}
                loading='lazy'
                className='object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105'
              />

              {/* Overlay caption */}
              {img.caption && (
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white px-3 py-2 text-sm'>
                  {img.caption}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {isOpen && (
        <LightboxModal
          image={currentImage}
          closeLightbox={closeLightbox}
          prev={prev}
          next={next}
        />
      )}
    </div>
  )
}
