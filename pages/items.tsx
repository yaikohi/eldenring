import type { NextPage } from 'next'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import items from '../public/data/items.json'

const Home: NextPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col gap-10">
        {items.map((item, index) => {
          return <Card key={index} item={item} />
        })}
      </div>
    </>
  )
}

export default Home
