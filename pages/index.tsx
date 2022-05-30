import type { NextPage } from 'next'
import { Card } from '../components/Card'
import ashes from '../public/data/ashes.json'

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        {ashes.map((ash, index) => {
          return <Card key={index} item={ash} />
        })}
      </div>
    </>
  )
}

export default Home
