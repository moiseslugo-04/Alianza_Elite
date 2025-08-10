import { useState, useEffect, useRef } from 'react'
export function useScroll() {
  const containerRef = useRef(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const speed = 25
  // Auto scroll logic
  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    let animationFrameId
    let lastTimestamp = 0

    const scrollSpeed = container.scrollWidth / speed // px per second approximation

    function step(timestamp) {
      if (!lastTimestamp) lastTimestamp = timestamp
      const elapsed = timestamp - lastTimestamp

      if (isAutoScrolling) {
        // Scroll a bit based on elapsed time
        container.scrollLeft += (scrollSpeed * elapsed) / 1000

        // Loop back if scrolled to the end (infinite scroll)
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
      }

      lastTimestamp = timestamp
      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isAutoScrolling, speed])

  // Manual drag handlers to pause auto scroll while dragging
  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    let isDragging = false
    let startX = 0
    let scrollLeftStart = 0

    function onMouseDown(e) {
      isDragging = true
      startX = e.pageX - container.offsetLeft
      scrollLeftStart = container.scrollLeft
      setIsAutoScrolling(false)
    }
    function onMouseUp() {
      isDragging = false
      // Resume auto scroll after short delay
      setTimeout(() => setIsAutoScrolling(true), 3000)
    }
    function onMouseLeave() {
      if (isDragging) onMouseUp()
    }
    function onMouseMove(e) {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = x - startX
      container.scrollLeft = scrollLeftStart - walk
    }

    container.addEventListener('mousedown', onMouseDown)
    container.addEventListener('mouseup', onMouseUp)
    container.addEventListener('mouseleave', onMouseLeave)
    container.addEventListener('mousemove', onMouseMove)

    // Also support touch devices
    function onTouchStart(e) {
      isDragging = true
      startX = e.touches[0].pageX - container.offsetLeft
      scrollLeftStart = container.scrollLeft
      setIsAutoScrolling(false)
    }
    function onTouchEnd() {
      isDragging = false
      setTimeout(() => setIsAutoScrolling(true), 3000)
    }
    function onTouchMove(e) {
      if (!isDragging) return
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = x - startX
      container.scrollLeft = scrollLeftStart - walk
    }

    container.addEventListener('touchstart', onTouchStart)
    container.addEventListener('touchend', onTouchEnd)
    container.addEventListener('touchmove', onTouchMove)

    return () => {
      container.removeEventListener('mousedown', onMouseDown)
      container.removeEventListener('mouseup', onMouseUp)
      container.removeEventListener('mouseleave', onMouseLeave)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchend', onTouchEnd)
      container.removeEventListener('touchmove', onTouchMove)
    }
  }, [])
  return { containerRef }
}
