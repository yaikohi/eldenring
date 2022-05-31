import type { NextPage } from 'next'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import npcs from '../public/data/npcs.json'

const Npcs: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {npcs.map((npc, index) => {
          return <Card key={index} item={npc} />
        })}
      </div>
    </>
  )
}

export default Npcs
