import type { NextPage } from 'next'
import { Card } from '../components/Card'
import ashes from '../public/data/ashes.json'

const Home: NextPage = () => {
  const array = [
    1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5,
    2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5,
  ]
  return (
    <>
      {ashes.map((ash) => {
        return <Card item={ash} />
      })}
    </>
  )
}

export default Home
