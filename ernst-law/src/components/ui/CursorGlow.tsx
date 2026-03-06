'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let x = 0
    let y = 0
    let currentX = 0
    let currentY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY + window.scrollY
    }

    const animate = () => {
      // Smooth follow with lerp
      currentX += (x - currentX) * 0.15
      currentY += (y - currentY) * 0.15
      glow.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-30 hidden lg:block"
      style={{
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(198,169,80,0.07) 0%, rgba(198,169,80,0.03) 30%, transparent 65%)',
        willChange: 'transform',
        mixBlendMode: 'screen',
      }}
    />
  )
}
