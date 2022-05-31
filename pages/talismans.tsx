import type { NextPage } from 'next'
import { Card } from 'components/Card'
import { Navbar } from 'components/Navbar'
import talismans from 'public/data/talismans.json'

const Talismans: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {talismans.map((talisman, index) => {
          return <Card key={index} item={talisman} />
        })}
      </div>
    </>
  )
}

export default Talismans
