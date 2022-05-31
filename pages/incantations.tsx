import type { NextPage } from 'next'
import { Card } from 'components/Card'
import { Navbar } from 'components/Navbar'
import incantations from 'public/data/incantations.json'

const Incantations: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {incantations.map((incantation, index) => {
          return <Card key={index} item={incantation} />
        })}
      </div>
    </>
  )
}

export default Incantations
