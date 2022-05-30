import type { NextPage } from 'next'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import armors from '../public/data/armor.json'

const Home: NextPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col gap-10">
        {armors.map((armor, index) => {
          return <Card key={index} item={armor} />
        })}
      </div>
    </>
  )
}

export default Home
