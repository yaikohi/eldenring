import type { NextPage } from 'next'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import creatures from '../public/data/creatures.json'

const Creatures: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {creatures.map((creature, index) => {
          return <Card key={index} item={creature} />
        })}
      </div>
    </>
  )
}

export default Creatures
