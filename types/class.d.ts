type Class = {
  id: string
  name: string
  image: string | null
  description: string
  stats: Stats
}

/**
 * The values are actually numbers but the types are strings in the API.
 */
type Stats = {
  level: string
  vigor: string
  mind: string
  endurance: string
  strength: string
  dexterity: string
  inteligence: string
  faith: string
  arcane: string
}
