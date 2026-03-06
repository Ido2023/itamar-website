export interface Video {
  id: string
  titleHe: string
  titleEn: string
  category: string
  isShort?: boolean
}

export interface Testimonial {
  nameHe: string
  nameEn: string
  date: string
  textHe: string
  textEn: string
  rating: number
}

export interface Office {
  name: string
  address: string
  type: string
}

export interface Article {
  title: string
  excerpt: string
}

export interface WhyItem {
  title: string
  desc: string
}
