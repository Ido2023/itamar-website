'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { PHONE_TEL, WHATSAPP_LINK } from '@/lib/constants'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.359 0-4.554-.674-6.418-1.837l-.447-.27-2.956.991.991-2.956-.27-.447A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
)

export default function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed z-40 flex flex-col gap-2 transition-opacity duration-500"
      style={{
        bottom: '1.25rem',
        insetInlineStart: '1.25rem',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      dir="ltr"
    >
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center transition-transform hover:scale-105"
        style={{
          backgroundColor: '#128C7E',
          color: '#FFFFFF',
          boxShadow: '0 8px 24px rgba(18,140,126,0.35)',
          borderRadius: '2px',
        }}
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <a
        href={PHONE_TEL}
        className="w-12 h-12 flex items-center justify-center transition-transform hover:scale-105"
        style={{
          backgroundColor: 'var(--color-ink)',
          color: 'var(--color-paper)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
          borderRadius: '2px',
        }}
        aria-label="Call"
      >
        <Phone size={18} />
      </a>
    </div>
  )
}
