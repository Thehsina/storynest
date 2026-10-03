export type CategoryId =
  | 'bedtime'
  | 'adventure'
  | 'nature'
  | 'space'
  | 'friendship'

export interface Category {
  id: CategoryId
  name: string
  description: string
  accentClassName: string
}
