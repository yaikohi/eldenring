import { useState } from 'react'
import { supabase } from 'utils/supabaseClient'

const Auth = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <p>Signing up can work with a &quot;magic&quot; link. </p>
        <div>
          <input
            type="email"
            className="input"
            placeholder="yuor emial"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault()
            handleLogin(email)
          }}
          className="w-8 h-8 max-h-8 max-w-8 min-w-8 min-h-8 "
        />
        <span>{loading ? 'Loading...' : 'Send magic link'}</span>
      </div>
    </>
  )
}
