import type { NextPage } from 'next'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import sorceries from '../public/data/sorceries.json'

const Sorceries: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {sorceries.map((sorcery, index) => {
          return <Card key={index} item={sorcery} />
        })}
      </div>
    </>
  )
}

export default Sorceries
