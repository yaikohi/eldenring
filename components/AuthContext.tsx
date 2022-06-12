import {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from 'react'

type TUser = {
  username: string
}

type TAuthContext = {
  user: TUser | null
  login: () => void
  logout: () => void
}

type AuthProps = {
  children: ReactNode
}

const authContextDefaultValues: TAuthContext = {
  user: null,
  login: () => {},
  logout: () => {},
}

const AuthContext = createContext<TAuthContext>(
  authContextDefaultValues,
)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<TUser | null>(null)

  const login = () => {
    setUser({ username: 'ellen' })
  }

  const logout = () => [setUser(null)]

  const value = {
    user,
    login,
    logout,
  }

  return (
    <>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    </>
  )
}
