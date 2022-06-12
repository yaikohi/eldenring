import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import { Card } from 'components/Card/Card'
import { Navbar } from 'components/Navbar'
import { EldenRingContent } from 'types/union'

const URL = 'https://eldenring.fanapis.com/api/'

export const getServerSideProps: GetServerSideProps = async ({
  params,
}) => {
  /**
   * Params cannot be 'null' or 'undefined' so I used assertion with `!`.
   * Sources:
   * 1.  https://stackoverflow.com/a/42274019/19240027
   * 2. https://stackoverflow.com/a/70131947/19240027
   */
  const { content, id } = params!

  const res: EldenRingContent = await fetch(`${URL}${content}/${id}`)
  const resJson = await res.json()
  const data = resJson.data

  return {
    props: {
      data,
    },
  }
}

const ContentById: NextPage<EldenRingContent[]> = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Navbar />
      <div className="mt-10 ">
        <Card item={data} />
      </div>
    </>
  )
}

export default ContentById
