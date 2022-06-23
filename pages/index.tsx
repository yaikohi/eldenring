import type { NextPage } from 'next'
import { Navbar } from 'components/Navbar'
import { useEffect, useState } from 'react'
import { supabase } from 'utils/supabaseClient'
import Authentication from 'components/Authentication'
import Account from 'components/Account'
import Link from 'next/link'

const Home: NextPage = () => {
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <>
      <div className="flex flex-col p-4 ">
        <h1 className="text-3xl">Home page</h1>
      </div>
      <Navbar />
      <div className="w-full bg-red-200 max-w-fit group">
        <button className="px-2 py-2 bg-fuchsia-200">navbar2</button>
        <div>
          <ul className="absolute hidden w-full max-w-sm p-4 bg-blue-400 group-hover:block">
            <li className="px-2 py-2 bg-blue-200 hover:bg-blue-900">
              <Link href="/">
                <a>1</a>
              </Link>
            </li>
            <li className="px-2 py-2 bg-blue-200 hover:bg-blue-900">
              <Link href="/">
                <a>2</a>
              </Link>
            </li>
            <li className="px-2 py-2 bg-blue-200 hover:bg-blue-900">
              <Link href="/">
                <a>3</a>
              </Link>
            </li>
            <li className="px-2 py-2 bg-blue-200 hover:bg-blue-900">
              <Link href="/">
                <a>4</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <main className="flex justify-center">
        {!session ? (
          <div className="max-w-md ">
            <Authentication />
          </div>
        ) : (
          <Account key={session.user.id} session={session} />
        )}
      </main>
    </>
  )
}

export default Home
