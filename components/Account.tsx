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
            // Don't return the value after updating the profile with the 'updates' object;; minimal
            returning: 'minimal',
          })

        // If supabase returns an error;
        if (error) {
          throw error
        }
      }
    } catch (error: unknown | any) {
      // Show error message if error
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-sm px-4 bg-slate-200 dark:bg-slate-900">
      <div className="flex flex-col min-w-full ">
        {/* Input + label EMAIL */}
        <div className="flex flex-col py-2 overflow-x-scroll ">
          <label className="px-4 text-sm dark:text-white" htmlFor="email">
            Email
          </label>
          <input
            className="px-3 py-2 font-sans text-base transition ease-in-out rounded-lg disabled:-500 dark:disabled:text-white focus:text-slate-900 dark:focus:text-slate-500 focus:border-yellow-900 focus:outline-none"
            id="email"
            type="text"
            value={session.user.email}
            disabled
          />
        </div>
        {/* Input + label USERNAME */}
        <div className="flex flex-col py-2 overflow-x-scroll ">
          <label
            className="px-4 text-sm dark:text-white"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="px-3 py-2 font-sans text-base transition ease-in-out rounded-lg disabled:-500 dark:disabled:text-white focus:text-slate-900 dark:focus:text-slate-500 focus: focus:border-yellow-900 focus:outline-none"
            id="username"
            type="text"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* Input + label WEBSITE*/}
        <div className="flex flex-col py-2 overflow-x-scroll ">
          <label
            className="px-4 text-sm dark:text-white"
            htmlFor="website"
          >
            Website
          </label>
          <input
            className="px-3 py-2 font-sans text-base transition ease-in-out rounded-lg disabled:-500 dark:disabled:text-white focus:focus:text-slate-900 dark:focus:text-slate-500 focus: focus:border-yellow-900 focus:outline-none"
            id="website"
            type="website"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="my-5">
          <div className="p-2 dark:text-white bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 hover:bg-slate-300 rounded-xl ">
            <button
              className="p-2"
              onClick={() =>
                updateProfile({ username, website, avatar_url })
              }
              disabled={loading}
            >
              {loading ? 'Loading ...' : 'Update'}
            </button>
          </div>

          <div className="p-2 mt-2 dark:text-white rounded-xl bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 hover:bg-slate-300">
            <button
              className="p-2 "
              onClick={() => supabase.auth.signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
