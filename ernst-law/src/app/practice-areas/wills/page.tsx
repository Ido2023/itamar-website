'use client'

import PracticeAreaDetail from '@/components/practice-areas/PracticeAreaDetail'
import { ScrollText } from 'lucide-react'

export default function WillsPage() {
  return (
    <PracticeAreaDetail
      icon={ScrollText}
      titleHe="ירושה וצוואות"
      titleEn="Inheritance & Wills"
      descHe="עריכת צוואות הרמטיות עם מנגנונים חדשניים למניעת סכסוכים במשפחה ושמירה על מורשת המשפחה."
      descEn="Drafting airtight wills with innovative mechanisms to prevent family disputes and preserve family legacy."
      detailsHe={[
        'צוואה מקצועית ומפורטת היא הכלי החשוב ביותר למניעת סכסוכי ירושה במשפחה. משרד עו"ד ארנסט מתמחה בעריכת צוואות הרמטיות עם מנגנונים חדשניים ויצירתיים המותאמים באופן אישי לכל משפחה.',
        'המשרד מציע מגוון רחב של פתרונות — צוואה הדדית, צוואה עם נאמנות, צוואה עם תנאים מיוחדים ומנגנוני הגנה ייחודיים. כל צוואה נבנית בקפידה כדי להבטיח שרצון המצווה יתקיים במלואו.',
        'בנוסף לעריכת צוואות, המשרד מייצג בסכסוכי ירושה, בקשות לקיום צוואות והתנגדויות לצוואות. הניסיון העשיר של המשרד בתחום מאפשר לנו להציע פתרונות יצירתיים גם במצבים מורכבים.',
        'אנו מאמינים שהשקעה בצוואה מקצועית היום מונעת שנים של סכסוכים וכאב ראש למשפחה. פגישת ייעוץ ראשונית תאפשר לנו להבין את צרכיכם ולהציע את הפתרון המתאים.',
      ]}
      detailsEn={[
        'A professional and detailed will is the most important tool for preventing inheritance disputes in the family. Ernst Law Office specializes in drafting airtight wills with innovative and creative mechanisms tailored personally to each family.',
        'The firm offers a wide range of solutions — mutual wills, trust wills, wills with special conditions, and unique protection mechanisms. Each will is carefully constructed to ensure the testator\'s wishes are fully fulfilled.',
        'In addition to drafting wills, the firm represents clients in inheritance disputes, probate applications, and will contests. Our rich experience in the field allows us to offer creative solutions even in complex situations.',
        'We believe that investing in a professional will today prevents years of disputes and headaches for the family. An initial consultation will allow us to understand your needs and propose the right solution.',
      ]}
      benefitsHe={[
        'צוואה הרמטית שלא ניתן לערער עליה',
        'מנגנונים חדשניים למניעת סכסוכים',
        'התאמה אישית למבנה המשפחה',
        'ייצוג בסכסוכי ירושה',
        'ליווי מקצועי לאורך כל התהליך',
      ]}
      benefitsEn={[
        'Airtight will that cannot be contested',
        'Innovative mechanisms for dispute prevention',
        'Personal adaptation to family structure',
        'Representation in inheritance disputes',
        'Professional guidance throughout the process',
      ]}
    />
  )
}
