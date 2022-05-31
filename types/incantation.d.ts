type Incantation = {
  id: string
  name: string
  image: string | null
  description: string
  type: string
  cost: string
  slots: string
  effects: string
  requires: Requirements[]
}

type Requirements = {
  name: string
  amount: number
}
