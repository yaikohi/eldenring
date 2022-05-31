import type { NextPage } from 'next'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import weapons from '../public/data/weapons.json'

const Weapons: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {weapons.map((weapon, index) => {
          return <Card key={index} item={weapon} />
        })}
      </div>
    </>
  )
}

export default Weapons
