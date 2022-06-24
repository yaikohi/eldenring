import type { NextPage } from 'next'
import { Navbar } from 'components/Navbar'
import { useEffect, useState } from 'react'
import { supabase } from 'utils/supabaseClient'
import Authentication from 'components/Authentication'
import Account from 'components/Account'

const Home: NextPage = () => {
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setSession(session)
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className="flex flex-col max-w-md p-4 mx-auto">
        <h1 className="text-3xl">Welcome</h1>
        <p>I don&apos;t know what to put here yet</p>
      </div>
      <main className="flex justify-center my-24">
        {!session ? (
          <div className="max-w-xl">
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
