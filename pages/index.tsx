import type { NextPage } from 'next'
import { Card } from 'components/Card'
import { Navbar } from 'components/Navbar'
import ashes from 'public/data/ashes.json'

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col p-4 ">
        <h1 className="text-3xl">Home page</h1>
      </div>
      <Navbar />
    </>
  )
}

export default Home
