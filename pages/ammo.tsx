import type {
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
} from 'next'
import { Key } from 'react'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import { Ammo } from '../types/ammo'

const URL = 'https://eldenring.fanapis.com/api/ammos'
const QUERY = '?limit=20'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${URL}${QUERY}`)
  const resJson = await res.json()
  const ammos = resJson.data

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
        {ammos.map((ammo: Ammo, index: Key) => {
          return <Card key={index} item={ammo} />
        })}
      </div>
    </>
  )
}

export default Ammos
