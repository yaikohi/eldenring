import type { NextPage } from 'next'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import shields from '../public/data/shields.json'

const Shields: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {shields.map((shield, index) => {
          return <Card key={index} item={shield} />
        })}
      </div>
    </>
  )
}

export default Shields
