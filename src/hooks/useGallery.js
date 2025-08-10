import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../hooks/useLanguage'
export function useGallery() {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState([undefined])
  const [images, setImages] = useState([])
  const openLightbox = (i) => {
    setCurrentImage(images[i])
    setIndex(i)
    setIsOpen(true)
    document.body.style.overflow = 'hidden' // evitar scroll detrás
  }
  const closeLightbox = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  const prev = useCallback(() => {
    const currentIndex = (index - 1 + images.length) % images.length
    console.log(currentIndex)
    setIndex(currentIndex)
    setCurrentImage(images[currentIndex])
  }, [images.length, index])
  const next = useCallback(() => {
    const currentIndex = (index + 1) % images.length
    console.log(currentIndex)

    setCurrentImage(images[currentIndex])
    setIndex(currentIndex)
  }, [images.length, index])

  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, prev, next])
  useEffect(() => {
    const images = t('globalTeams', { returnObjects: true })
    setImages(images)
  }, [language])
  return {
    openLightbox,
    closeLightbox,
    prev,
    next,
    isOpen,
    images,
    currentImage,
  }
}
