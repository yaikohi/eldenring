export type Creature = {
  id: string
  name: string
  image: string | null
  description: string
  location: string
  drops: Drops
}

/**
 * List of items that the creature drops.
 */
type Drops = string[]
