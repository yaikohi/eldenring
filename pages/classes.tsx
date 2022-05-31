import type { NextPage } from 'next'
import { Card } from 'components/Card'
import { Navbar } from 'components/Navbar'
import classes from 'public/data/classes.json'

const Classes: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {classes.map((c, index) => {
          return <Card key={index} item={c} />
        })}
      </div>
    </>
  )
}

export default Classes
