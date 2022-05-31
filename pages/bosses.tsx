import type { NextPage } from 'next'
import { Card } from 'components/Card'
import { Navbar } from 'components/Navbar'
import bosses from 'public/data/bosses.json'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {bosses.map((boss, index) => {
          return <Card key={index} item={boss} />
        })}
      </div>
    </>
  )
}

export default Home
