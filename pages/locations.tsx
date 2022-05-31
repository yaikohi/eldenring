import type { NextPage } from 'next'
import { Card } from 'components/Card'
import { Navbar } from 'components/Navbar'
import locations from 'public/data/locations.json'

const Locations: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {locations.map((location, index) => {
          return <Card key={index} item={location} />
        })}
      </div>
    </>
  )
}

export default Locations
