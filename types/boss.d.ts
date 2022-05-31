export type Boss = {
  id: string
  name: string
  image: string | null
  region: string
  description: string
  location: string
  drops: Drops
  healthPoints: string
}

/**
 *  List of items that the boss might drop
 */
export type Drops = string[]
