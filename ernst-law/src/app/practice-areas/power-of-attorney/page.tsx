'use client'

import PracticeAreaDetail from '@/components/practice-areas/PracticeAreaDetail'
import { FileCheck } from 'lucide-react'

export default function PowerOfAttorneyPage() {
  return (
    <PracticeAreaDetail
      icon={FileCheck}
      titleHe="ייפוי כוח מתמשך"
      titleEn="Continuing Power of Attorney"
      descHe="הכנת ייפוי כוח מתמשך מקיף המבטיח שעניינכם יטופלו בדיוק כפי שתרצו — גם כשלא תוכלו להחליט בעצמכם."
      descEn="Comprehensive continuing power of attorney ensuring your affairs are managed exactly as you wish — even when you cannot decide yourself."
      detailsHe={[
        'ייפוי כוח מתמשך הוא מסמך משפטי חשוב המאפשר לכם לקבוע מראש מי ינהל את ענייניכם הרפואיים, הרכושיים והאישיים כאשר לא תוכלו לעשות זאת בעצמכם.',
        'משרד עו"ד ארנסט מתמחה בהכנת ייפוי כוח מתמשך מקיף ומפורט, הכולל הנחיות ברורות בכל תחום — ענייני רכוש, ענייני גוף ובריאות, וצרכים אישיים.',
        'הייפוי מאפשר לכם לבחור את האנשים שאתם סומכים עליהם, להגדיר את סמכויותיהם, ולהבטיח שרצונכם יכובד בכל מצב. זוהי חלופה מומלצת למינוי אפוטרופוס.',
        'התהליך כולל פגישה אישית מעמיקה, עריכת המסמך, חתימה בנוכחות עו"ד מוסמך, והפקדה אצל האפוטרופוס הכללי. אנו מלווים אתכם בכל שלב.',
      ]}
      detailsEn={[
        'A continuing power of attorney is an important legal document that allows you to determine in advance who will manage your medical, property, and personal affairs when you can no longer do so yourself.',
        'Ernst Law Office specializes in preparing comprehensive and detailed continuing powers of attorney, including clear instructions in every area — property matters, health and body matters, and personal needs.',
        'The power of attorney allows you to choose the people you trust, define their authorities, and ensure your wishes are honored in every situation. This is a recommended alternative to guardianship appointment.',
        'The process includes an in-depth personal meeting, document preparation, signing in the presence of a certified attorney, and filing with the General Guardian. We guide you at every step.',
      ]}
      benefitsHe={[
        'שליטה מלאה על ענייניכם העתידיים',
        'חלופה מומלצת לאפוטרופסות',
        'מסמך מקיף ומפורט',
        'הגנה על רצונכם וכבודכם',
        'תהליך פשוט וברור',
      ]}
      benefitsEn={[
        'Full control over your future affairs',
        'Recommended alternative to guardianship',
        'Comprehensive and detailed document',
        'Protection of your wishes and dignity',
        'Simple and clear process',
      ]}
    />
  )
}
