import type {
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
} from 'next'
import { Key } from 'react'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import { Ammo } from '../types/ammo'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://eldenring.fanapis.com/api/ammos')
  const ammos: Ammo[] = await res.json()
  return {
    props: {
      ammos,
    },
  }
}

const Ammos: NextPage<Ammo[]> = ({
  ammos,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {ammos.data.map((ammo: Ammo, index: Key) => {
          return <Card key={index} item={ammo} />
        })}
      </div>
    </>
  )
}

export default Ammos
