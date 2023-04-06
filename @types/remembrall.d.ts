interface UserData {
  username: string
  sets: SetData[]
}
interface SetData {
  id: string
  name: string
  lastUpdated: number
  newToday: number
  reviewsToday: number
  settings: SetSettings
  cards: CardData[]
}
interface SetSettings {
  studyReverse: boolean
  languageTools: string | null
  maxNewPerDay: number
  maxReviewsPerDay: number
  autoSpeakFront: boolean
  autoSpeakBack: boolean
  oncePerDay: boolean
  reviewIntervalMultiplier: number
  [key: string]: any
}
interface CardData {
  set: string
  created: number
  ok: number
  again: number
  nextReview: number
  front: string
  back: string
  lastStudied: number
  lastEdited: number
  totalReviews: number
  examples?: string[]
  imageURL?: string
  id: string
  timeMod: number
}
