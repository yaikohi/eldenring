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
