'use client'

import { useState } from 'react'
import { Phone, Calendar, X, Plus } from 'lucide-react'
import { PHONE_TEL, WHATSAPP_LINK, CALENDLY_LINK } from '@/lib/constants'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.359 0-4.554-.674-6.418-1.837l-.447-.27-2.956.991.991-2.956-.27-.447A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
)

interface ActionItem {
  href: string
  label: string
  icon: React.ReactNode
  bg: string
  color: string
  pulse?: boolean
  external?: boolean
}

const actions: ActionItem[] = [
  {
    href: WHATSAPP_LINK,
    label: 'WhatsApp',
    icon: <WhatsAppIcon />,
    bg: '#25D366',
    color: '#fff',
    pulse: true,
    external: true,
  },
  {
    href: PHONE_TEL,
    label: 'התקשרו',
    icon: <Phone size={20} />,
    bg: 'rgba(200,169,110,0.95)',
    color: '#0F1923',
    external: false,
  },
  {
    href: CALENDLY_LINK,
    label: 'קבעו פגישה',
    icon: <Calendar size={20} />,
    bg: 'rgba(30,45,70,0.95)',
    color: '#C8A96E',
    external: true,
  },
]

export default function FloatingActions() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="fixed z-50 flex flex-col items-end gap-3"
      style={{ bottom: '1.5rem', left: '1.5rem' }}
      dir="ltr"
    >
      {/* Expanded action items */}
      {expanded && (
        <div className="flex flex-col-reverse gap-3">
          {actions.map((action, i) => (
            <div
              key={i}
              className="flex items-center gap-3"
              style={{
                animation: `slideInLeft 0.25s ease-out ${i * 0.05}s both`,
              }}
            >
              {/* Tooltip label */}
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
                style={{
                  backgroundColor: 'rgba(10,22,40,0.95)',
                  color: '#F5F0EB',
                  border: '1px solid rgba(200,169,110,0.2)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {action.label}
              </span>
              {/* Button */}
              <a
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
                style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: action.bg,
                  color: action.color,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
                onClick={() => setExpanded(false)}
              >
                {action.icon}
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-center rounded-full shadow-xl transition-all duration-300"
        style={{
          width: '3.5rem',
          height: '3.5rem',
          background: expanded
            ? 'rgba(30,45,70,0.95)'
            : 'linear-gradient(135deg, #C8A96E, #A8884E)',
          color: expanded ? '#C8A96E' : '#0F1923',
          boxShadow: expanded
            ? '0 4px 20px rgba(0,0,0,0.5)'
            : '0 4px 24px rgba(200,169,110,0.4)',
          border: expanded ? '1px solid rgba(200,169,110,0.3)' : 'none',
        }}
        aria-label="פתח/סגור אפשרויות יצירת קשר"
      >
        {expanded ? <X size={22} /> : <Plus size={22} />}
      </button>

      {/* Animation definitions — always rendered */}
      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
