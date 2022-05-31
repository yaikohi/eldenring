import type {
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
} from 'next'
import { Key } from 'react'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import type { Ash } from '../types/ash'

const URL = 'https://eldenring.fanapis.com/api/ashes'
const QUERY = '?limit=20'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${URL}${QUERY}`)
  const resJson = await res.json()
  const ashes = resJson.data

  return {
    props: {
      ashes,
    },
  }
}

const Ashes: NextPage<Ash[]> = ({
  ashes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        {ashes.map((ash: Ash, index: Key) => {
          return <Card key={index} item={ash} />
        })}
      </div>
    </>
  )
}

export default Ashes
