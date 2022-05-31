export type Ammo = {
  id: string
  name: string
  image: string | null
  description: string
  type: string
  attackPower: AttackPower[]
  passive: string
}

export type AttackPower = {
  name: string
  amount: number
}
