export type Weapon = {
  id: string
  name: string
  image: string | null
  description: string
  attack: Attack[]
  defence: Defence[]
  scalesWith: ScalesWith[]
  requiredAttributes: RequiredAttributes[]
  category: string
  weight: number
}

type Attack = {
  name: string
  amount: number
}

type Defence = {
  name: string
  amount: number
}

type RequiredAttributes = {
  name: string
  amount: number
}

type ScalesWith = {
  name: string
  amount: number
}
