import type { NextPage } from 'next'
import { Card } from 'components/Card'
import { Navbar } from 'components/Navbar'
import spirits from 'public/data/spirits.json'

const Spirits: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {spirits.map((spirit, index) => {
          return <Card key={index} item={spirit} />
        })}
      </div>
    </>
  )
}

export default Spirits
