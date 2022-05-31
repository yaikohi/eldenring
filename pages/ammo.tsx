import type { NextPage } from 'next'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import ammos from '../public/data/ammo.json'

const Ammo: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {ammos.map((ammo, index) => {
          return <Card key={index} item={ammo} />
        })}
      </div>
    </>
  )
}

export default Ammo
