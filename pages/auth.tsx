/**
 * auth, context, typescript, in nextjs tutorial: https://dev.to/shareef/context-api-with-typescript-and-next-js-2m25
 */

import { NextPage } from 'next'

interface Props {}

const auth: NextPage<Props> = () => {
  return <div>Auth</div>
}

export default auth
