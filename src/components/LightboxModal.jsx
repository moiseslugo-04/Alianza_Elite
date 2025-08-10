export function LightboxModal({ image, closeLightbox, prev, next }) {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      role='dialog'
      aria-modal='true'
    >
      {/* backdrop */}
      <div
        className='absolute inset-0 bg-black/70 backdrop-blur-sm'
        onClick={closeLightbox}
        aria-hidden='true'
      />

      <div className='relative max-w-4xl w-full mx-auto z-10'>
        <button
          onClick={closeLightbox}
          className='absolute top-[-35px] right-0 bg-red-500/90 rounded-lg py-1 px-2 shadow hover:scale-105 transition'
          aria-label='Cerrar'
        >
          ✕
        </button>

        <div className='flex items-center gap-4'>
          <button
            onClick={prev}
            className='hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-white/90 shadow'
            aria-label='Imagen anterior'
          >
            ‹
          </button>

          <div className='bg-white rounded-lg overflow-hidden'>
            <img
              src={image.src}
              alt={image.alt || `Imagen ${image.index + 1}`}
              className='max-h-[100vh] object-contain w-full bg-black'
            />

            {image.caption && (
              <div className='p-3 text-sm text-gray-100 bg-gradient-to-t from-gray-900 to-transparent'>
                {image.caption}
              </div>
            )}
          </div>

          <button
            onClick={next}
            className='hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-white/90 shadow'
            aria-label='Siguiente imagen'
          >
            ›
          </button>
        </div>

        {/* controles pequeños para mobile */}
        <div className='flex justify-between mt-3 sm:hidden text-white'>
          <button onClick={prev} aria-label='Anterior'>
            Anterior
          </button>
          <button onClick={next} aria-label='Siguiente'>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}
