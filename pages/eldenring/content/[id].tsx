import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticProps,
} from 'next'
import { useRouter } from 'next/router'
import { Key } from 'react'
import { Card } from 'components/Card'
import { Navbar } from 'components/Navbar'
import { Armor } from 'types/armor'

const URL = 'https://eldenring.fanapis.com/api/armors'
const QUERY = '?limit=20'

export const getStaticPaths = async () => {}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${URL}${QUERY}`)
  const resJson = await res.json()
  const armors = resJson.data

  return {
    props: {
      armors,
    },
  }
}

const Armors: NextPage<Armor[]> = ({
  armors,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const { content, id } = router.query

  return (
    <>
      <Navbar />
      <h1>{content}</h1>
      <h2>{id} </h2>
      {/* <div className="flex flex-col gap-10">
        {armors.map((armor: Armor, index: Key) => {
          return <Card key={index} item={armor} />
        })}
      </div> */}
    </>
  )
}

export default Armors
