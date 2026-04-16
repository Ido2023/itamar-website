'use client'

import PracticeAreaDetail from '@/components/practice-areas/PracticeAreaDetail'
import { Building } from 'lucide-react'

export default function RealEstateTaxPage() {
  return (
    <PracticeAreaDetail
      icon={Building}
      titleHe='מיסוי מקרקעין ועסקאות מכר נדל"ן'
      titleEn="Real Estate Taxation & Sale Transactions"
      descHe="ייעוץ מקצועי בהעברת נכסי מקרקעין, תכנון מס אופטימלי ברכישה, מכירה והעברת דירות."
      descEn="Professional guidance on real estate asset transfers, optimal tax planning for purchase, sale, and apartment transfers."
      detailsHe={[
        'מיסוי מקרקעין הוא תחום מורכב הדורש ידע מקצועי מעמיק. משרד עו"ד ארנסט מספק ייעוץ מקיף בכל הקשור למיסוי עסקאות מקרקעין — מס שבח, מס רכישה, היטל השבחה ועוד.',
        'המשרד מתמחה בתכנון מס אופטימלי בהעברת דירות ונכסים בין בני משפחה, ניצול פטורים והקלות מס, וליווי עסקאות מקרקעין מורכבות מתחילתן ועד סופן.',
        'אנו מלווים לקוחות ברכישה ומכירה של נכסים, העברת דירות במתנה, חלוקת נכסי מקרקעין בין יורשים, ותכנון מס לטווח ארוך במסגרת העברה בין-דורית.',
        'תכנון מס נכון יכול לחסוך סכומים משמעותיים. פגישת ייעוץ תאפשר לנו לבחון את המצב הספציפי שלכם ולהציע את הדרך האופטימלית מבחינת מיסוי.',
      ]}
      detailsEn={[
        'Real estate taxation is a complex field requiring deep professional knowledge. Ernst Law Office provides comprehensive counsel on all matters related to real estate transaction taxation — capital gains tax, purchase tax, betterment levy, and more.',
        'The firm specializes in optimal tax planning for apartment and property transfers between family members, utilizing exemptions and tax benefits, and accompanying complex real estate transactions from start to finish.',
        'We guide clients through property purchases and sales, gifting apartments, dividing real estate assets among heirs, and long-term tax planning as part of intergenerational transfers.',
        'Proper tax planning can save significant amounts. A consultation will allow us to examine your specific situation and suggest the optimal approach from a taxation perspective.',
      ]}
      benefitsHe={[
        'חיסכון משמעותי במיסוי מקרקעין',
        'ניצול מלוא הפטורים וההקלות',
        'ליווי מלא של עסקאות נדל"ן',
        'תכנון מס לטווח ארוך',
        'מומחיות בהעברת נכסים במשפחה',
      ]}
      benefitsEn={[
        'Significant savings on real estate taxes',
        'Full utilization of exemptions and benefits',
        'Complete accompaniment of real estate transactions',
        'Long-term tax planning',
        'Expertise in family property transfers',
      ]}
    />
  )
}
