import type { Metadata } from 'next'
import { Heebo, Frank_Ruhl_Libre, Playfair_Display, Inter } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
})

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-frank',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'משרד עו"ד איתמר ארנסט | העברה בין-דורית של נכסים',
  description: 'משרד עורכי דין מוביל המתמחה בהעברה בין-דורית של נכסים, ירושה, צוואות, מיסוי מקרקעין, ייפוי כוח מתמשך והסכמי ממון. One Stop Shop למניעת סכסוכים משפחתיים.',
  keywords: 'עורך דין ירושה, צוואה, העברה בין דורית, מיסוי מקרקעין, ייפוי כוח מתמשך, הסכמי ממון, עו"ד איתמר ארנסט',
  openGraph: {
    title: 'משרד עו"ד איתמר ארנסט | העברה בין-דורית של נכסים',
    description: 'מומחיות בתכנון העברה בין-דורית, ירושה ומיסוי מקרקעין',
    locale: 'he_IL',
    type: 'website',
    siteName: 'Ernst Law',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`
      ${heebo.variable} ${frankRuhl.variable}
      ${playfair.variable} ${inter.variable}
    `}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="overflow-x-hidden">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
