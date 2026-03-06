'use client'

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { he } from './he'
import { en } from './en'

type Language = 'he' | 'en'

interface LanguageContextType {
  lang: Language
  t: typeof he
  toggleLanguage: () => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('he')

  const toggleLanguage = useCallback(() => {
    setLang(prev => prev === 'he' ? 'en' : 'he')
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
  }, [lang])

  const t = lang === 'he' ? he : en
  const isRTL = lang === 'he'

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
