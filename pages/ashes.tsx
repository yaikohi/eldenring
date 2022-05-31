import type { NextPage } from 'next'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import ashes from '../public/data/ashes.json'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {ashes.map((ash, index) => {
          return <Card key={index} item={ash} />
        })}
      </div>
    </>
  )
}

export default Home
