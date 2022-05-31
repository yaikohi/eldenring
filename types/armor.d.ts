export type Armor = {
  id: string
  name: string
  image: string | null
  description: string
  category: string
  dmgNegation: DamageNegation[]
  resistance: Resistance[]
  weight: string
}

export type DamageNegation = {
  name: string
  amount: number
}
export type Resistance = {
  name: string
  amount: number
}
