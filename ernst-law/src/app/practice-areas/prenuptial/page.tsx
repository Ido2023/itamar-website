'use client'

import PracticeAreaDetail from '@/components/practice-areas/PracticeAreaDetail'
import { Heart } from 'lucide-react'

export default function PrenuptialPage() {
  return (
    <PracticeAreaDetail
      icon={Heart}
      titleHe="הסכמי ממון"
      titleEn="Prenuptial / Financial Agreements"
      descHe="עריכת הסכמי ממון מאוזנים ומקיפים בין בני זוג, המגנים על שני הצדדים ועל נכסי המשפחה."
      descEn="Balanced and comprehensive financial agreements between spouses, protecting both parties and family assets."
      detailsHe={[
        'הסכם ממון הוא הסכם משפטי בין בני זוג המסדיר את חלוקת הרכוש והזכויות הכספיות ביניהם. ניתן לערוך הסכם ממון לפני הנישואין, במהלכם, או לקראת פרידה.',
        'משרד עו"ד ארנסט מתמחה בעריכת הסכמי ממון מאוזנים ומקצועיים, תוך הקפדה על שמירת האינטרסים של שני הצדדים. אנו מאמינים שהסכם ממון טוב מגן על המשפחה ומונע אי-ודאויות עתידיות.',
        'ההסכם יכול לכלול הסדרים בנוגע לדירת המגורים, חשבונות בנק, השקעות, פנסיות, עסקים משפחתיים, ירושות ומתנות, וכל עניין רכושי אחר שחשוב לבני הזוג.',
        'אנו מלווים את שני בני הזוג בתהליך ברגישות, בשקיפות ובמקצועיות, ומוודאים שכל צד מבין את משמעויות ההסכם. ההסכם מאושר על ידי בית המשפט לענייני משפחה או נוטריון.',
      ]}
      detailsEn={[
        'A financial agreement is a legal agreement between spouses that regulates the division of property and financial rights between them. A financial agreement can be made before marriage, during marriage, or towards separation.',
        'Ernst Law Office specializes in drafting balanced and professional financial agreements, while carefully preserving the interests of both parties. We believe a good financial agreement protects the family and prevents future uncertainties.',
        'The agreement can include arrangements regarding the family home, bank accounts, investments, pensions, family businesses, inheritances and gifts, and any other property matter important to the couple.',
        'We accompany both spouses through the process with sensitivity, transparency, and professionalism, ensuring each party understands the implications of the agreement. The agreement is approved by the Family Court or a notary.',
      ]}
      benefitsHe={[
        'הגנה על שני בני הזוג',
        'מניעת אי-ודאות עתידית',
        'הסדרת כל העניינים הרכושיים',
        'תהליך רגיש ומקצועי',
        'אישור בית המשפט',
      ]}
      benefitsEn={[
        'Protection for both spouses',
        'Prevention of future uncertainty',
        'Regulation of all property matters',
        'Sensitive and professional process',
        'Court approval',
      ]}
    />
  )
}
