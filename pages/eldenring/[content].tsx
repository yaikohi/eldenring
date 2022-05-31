import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticProps,
} from 'next'
import { useRouter } from 'next/router'
import { Key } from 'react'
import { Card } from 'components/Card'
import { Navbar } from 'components/Navbar'
import { EldenRingContent } from 'types/union'

const URL = 'https://eldenring.fanapis.com/api/'
const QUERY = '1'

export const getStaticPaths = async () => {
  const paths = [
    { params: { content: 'ammos' } },
    { params: { content: 'armors' } },
    { params: { content: 'ashes' } },
    { params: { content: 'bosses' } },
    { params: { content: 'classes' } },
    { params: { content: 'creatures' } },
    { params: { content: 'incantations' } },
    { params: { content: 'items' } },
    { params: { content: 'locations' } },
    { params: { content: 'npcs' } },
    { params: { content: 'shields' } },
    { params: { content: 'sorceries' } },
    { params: { content: 'spirits' } },
    { params: { content: 'talismans' } },
    { params: { content: 'weapons' } },
  ]

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: any) => {
  const res = await fetch(`${URL}${params.content}?limit=${QUERY}`)
  const resJson = await res.json()
  const data = resJson.data

  return {
    props: {
      data,
    },
  }
}

const Content: NextPage<EldenRingContent[]> = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const { content } = router.query

  return (
    <>
      <Navbar />
      <h1>{content}</h1>
      <div className="flex flex-col gap-10">
        {data.map((item: EldenRingContent, index: Key) => {
          return <Card key={index} item={item} />
        })}
      </div>
    </>
  )
}

export default Content
