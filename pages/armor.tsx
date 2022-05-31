import type { NextPage, InferGetStaticPropsType } from 'next'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import { Armor } from '../types/armor'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://eldenring.fanapis.com/api/armors')
  const armors: Ammo[] = await res.json()
  return {
    props: {
      armors,
    },
  }
}

const Home: NextPage<Armor[]> = ({
  armors,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {armors.map((armor, index) => {
          return <Card key={index} item={armor} />
        })}
      </div>
    </>
  )
}

export default Home
