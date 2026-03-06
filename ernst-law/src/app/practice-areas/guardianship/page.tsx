'use client'

import PracticeAreaDetail from '@/components/practice-areas/PracticeAreaDetail'
import { Scale } from 'lucide-react'

export default function GuardianshipPage() {
  return (
    <PracticeAreaDetail
      icon={Scale}
      titleHe="אפוטרופסות"
      titleEn="Guardianship"
      descHe="ייעוץ וייצוג בהליכי מינוי אפוטרופוס וניהול ענייניהם של אלו שאינם יכולים לנהל את ענייניהם."
      descEn="Counsel and representation in guardianship appointment proceedings and managing affairs of those who cannot manage their own."
      detailsHe={[
        'אפוטרופסות היא מוסד משפטי המאפשר מינוי אדם או גוף לנהל את ענייניו של מי שאינו מסוגל לנהל אותם בעצמו — בין אם מדובר בקטינים, באנשים עם מוגבלות, או בקשישים.',
        'משרד עו"ד ארנסט מלווה משפחות בהליכי מינוי אפוטרופוס, ייצוג בבית המשפט, וייעוץ שוטף לאפוטרופסים בניהול ענייני החסוי.',
        'אנו מקפידים על שמירת כבודו וזכויותיו של החסוי, תוך מתן פתרונות מותאמים אישית לצרכי המשפחה. כאשר ניתן, אנו ממליצים על חלופות כמו ייפוי כוח מתמשך.',
        'המשרד מספק ליווי מקצועי מלא — מהגשת הבקשה ועד סיום ההליך, כולל דיווחים תקופתיים לאפוטרופוס הכללי וטיפול בכל הנדרש.',
      ]}
      detailsEn={[
        'Guardianship is a legal institution that enables the appointment of a person or body to manage the affairs of someone who cannot manage them independently — whether minors, persons with disabilities, or the elderly.',
        'Ernst Law Office accompanies families through guardianship appointment proceedings, court representation, and ongoing counsel for guardians in managing ward affairs.',
        'We ensure the preservation of the ward\'s dignity and rights while providing personalized solutions for family needs. When possible, we recommend alternatives such as a continuing power of attorney.',
        'The firm provides complete professional guidance — from filing the application through the conclusion of proceedings, including periodic reports to the General Guardian and handling all requirements.',
      ]}
      benefitsHe={[
        'ליווי מקצועי בכל שלבי ההליך',
        'שמירה על כבוד וזכויות החסוי',
        'ייצוג בבית המשפט',
        'ייעוץ שוטף לאפוטרופסים',
        'המלצה על חלופות מתאימות',
      ]}
      benefitsEn={[
        'Professional guidance at every stage',
        'Preservation of ward\'s dignity and rights',
        'Court representation',
        'Ongoing counsel for guardians',
        'Recommendation of suitable alternatives',
      ]}
    />
  )
}
