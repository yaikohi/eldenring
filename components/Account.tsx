import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Account({ session }: unknown | any) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()
      if (user !== null) {
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`username, website, avatar_url`)
          .eq('id', user.id)
          .single()

        if (error && status !== 406) {
          throw error
        }

        if (data) {
          setUsername(data.username)
          setWebsite(data.website)
          setAvatarUrl(data.avatar_url)
        }
      }
    } catch (error: unknown | any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null
    website: string | null
    avatar_url: string | null
  }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      if (user !== null) {
        const updates = {
          id: user.id,
          username,
          website,
          avatar_url,
          updated_at: new Date(),
        }

        let { error } = await supabase
          .from('profiles')
          .upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
          })

        if (error) {
          throw error
        }
      }
    } catch (error: unknown | any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Input + label EMAIL */}
      <div className="bg-black ">
        <label className="text-sm text-white" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 font-sans text-base transition ease-in-out rounded-lg disabled:bg-slate-500 disabled:text-white focus:text-slate-500 focus:bg-white focus:border-yellow-900 focus:outline-none"
          id="email"
          type="text"
          value={session.user.email}
          disabled
        />
      </div>
      {/* Input + label USERNAME */}
      <div className="bg-black">
        <label className="text-sm text-white" htmlFor="username">
          Username
        </label>
        <input
          className="w-full px-3 py-2 font-sans text-base transition ease-in-out rounded-lg disabled:bg-slate-500 disabled:text-white focus:text-slate-500 focus:bg-white focus:border-yellow-900 focus:outline-none"
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {/* Input + label WEBSITE*/}
      <div className="bg-black ">
        <label className="text-sm text-white" htmlFor="website">
          Website
        </label>
        <input
          className="w-full px-3 py-2 font-sans text-base transition ease-in-out rounded-lg disabled:bg-slate-500 disabled:text-white focus:text-slate-500 focus:bg-white focus:border-yellow-900 focus:outline-none"
          id="website"
          type="website"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <button
          className=""
          onClick={() =>
            updateProfile({ username, website, avatar_url })
          }
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
