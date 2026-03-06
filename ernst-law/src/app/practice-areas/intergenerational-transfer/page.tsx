'use client'

import PracticeAreaDetail from '@/components/practice-areas/PracticeAreaDetail'
import { Users } from 'lucide-react'

export default function IntergenerationalTransferPage() {
  return (
    <PracticeAreaDetail
      icon={Users}
      titleHe="העברה בין-דורית של נכסים"
      titleEn="Intergenerational Asset Transfer"
      descHe="תכנון מקצועי ומקיף להעברת נכסים למשפחות מרובות נכסים — ודאות, הסכמיות וחיסכון אדיר במיסוי עתידי."
      descEn="Comprehensive professional planning for transferring assets in multi-asset families — certainty, consensus, and significant tax savings."
      detailsHe={[
        'העברה בין-דורית של נכסים היא תהליך מורכב הדורש תכנון מקצועי ומקיף. מדובר בהעברת נכסים, זכויות ורכוש מדור אחד לדור הבא, תוך שמירה על ערך הנכסים ומניעת סכסוכים משפחתיים.',
        'משרד עו"ד ארנסט מתמחה בתכנון מקיף של העברה בין-דורית, הכולל מיפוי כלל נכסי המשפחה, תכנון מס אופטימלי, עריכת צוואות מותאמות אישית עם מנגנונים חדשניים, והכנת ייפוי כוח מתמשך.',
        'התהליך מבוסס על עקרונות של שקיפות והסכמיות בין כל בני המשפחה, תוך יצירת ודאות משפטית ומניעת הליכים משפטיים עתידיים. כל תוכנית מותאמת אישית למבנה המשפחתי והנכסי הייחודי.',
        'השקעה בתכנון מקצועי חוסכת למשפחה שנים של התדיינות בבתי משפט, קרעים משפחתיים ועלויות כספיות ניכרות. זוהי השקעה חד-פעמית שמשתלמת לאורך דורות.',
      ]}
      detailsEn={[
        'Intergenerational asset transfer is a complex process requiring professional and comprehensive planning. It involves transferring assets, rights, and property from one generation to the next while preserving asset value and preventing family disputes.',
        'Ernst Law Office specializes in comprehensive intergenerational transfer planning, including mapping all family assets, optimal tax planning, drafting personalized wills with innovative mechanisms, and preparing continuing powers of attorney.',
        'The process is based on principles of transparency and consensus among all family members, creating legal certainty and preventing future legal proceedings. Each plan is personally tailored to the unique family and asset structure.',
        'Investing in professional planning saves families years of litigation, family rifts, and significant financial costs. This is a one-time investment that pays off for generations.',
      ]}
      benefitsHe={[
        'ודאות משפטית מלאה לכל בני המשפחה',
        'חיסכון משמעותי במיסוי עתידי',
        'מניעת סכסוכים והליכים משפטיים',
        'שמירה על ערך הנכסים לאורך הדורות',
        'תכנון מותאם אישית לכל משפחה',
        'ליווי מקצועי צמוד לאורך כל התהליך',
      ]}
      benefitsEn={[
        'Complete legal certainty for all family members',
        'Significant future tax savings',
        'Prevention of disputes and legal proceedings',
        'Preserving asset value across generations',
        'Personalized planning for each family',
        'Close professional guidance throughout the process',
      ]}
    />
  )
}
