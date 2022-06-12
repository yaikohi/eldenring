import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { BaseButton } from './BaseButton'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)

      const { error } = await supabase.auth.signIn({ email })

      if (error) throw error

      alert('Check your email for the login link!')
    } catch (error: unknown | any) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="text-white bg-gradient-to-tr from-yellow-900 to-slate-900">
      <div className="flex flex-col p-4 m-4  gap-y-2 gap-x-4">
        <h1 className="text-3xl">Sign up</h1>
        <p className="py-2 text-base">
          Sign in via magic link with your email below
        </p>
        <input
          className="w-full px-3 py-2 font-sans text-base transition ease-in-out rounded-lg focus:text-gray-900 focus:bg-white focus:border-yellow-900 focus:outline-none"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BaseButton
          onClick={(e: { preventDefault: () => void }) => {
            e.preventDefault()
            handleLogin(email)
          }}
          disabled={loading}
        >
          <span>{loading ? 'Loading' : 'Send magic link'}</span>
        </BaseButton>
      </div>
    </div>
  )
}
