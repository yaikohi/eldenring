import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import { Card } from 'components/Card'
import { Navbar } from 'components/Navbar'
import { EldenRingContent } from 'types/union'

const URL = 'https://eldenring.fanapis.com/api/'

export const getServerSideProps: GetServerSideProps = async (
  context,
) => {
  const { params } = context
  /**
   * TODO:
   * Refactor if/else statements below. This is ugly.
   */

  if (params !== undefined) {
    const res = await fetch(`${URL}${params.content}/${params.id}`)
    const resJson = await res.json()
    const data = resJson.data

    if (data !== undefined) {
      return {
        props: {
          data,
        },
      }
    } else {
      const data = null
      return {
        props: {
          data,
        },
      }
    }
  } else {
    const data = null
    return {
      props: {
        data,
      },
    }
  }
}

const ContentById: NextPage<EldenRingContent[]> = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (data !== null) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col gap-10">
          <Card item={data} />
        </div>
      </>
    )
  } else {
    return (
      <>
        <Navbar />
        <div className="flex flex-col gap-10">Card</div>
      </>
    )
  }
}

export default ContentById
