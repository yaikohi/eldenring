import type { NextPage } from 'next'
import { Card } from 'components/Card'
import { Navbar } from 'components/Navbar'
import ashes from 'public/data/ashes.json'
import { useAuth } from 'components/AuthContext'

const Home: NextPage = () => {
  const { user, login, logout } = useAuth()

  console.log(user)

  return (
    <>
      <div className="flex flex-col p-4 ">
        <h1 className="text-3xl">Home page</h1>
      </div>
      <Navbar />
      <main>
        <h1>
          Hello,{' '}
          {user !== null
            ? `${user.username} how are you doing today hehehehehe`
            : 'wanna sign up?'}{' '}
        </h1>
        {!user ? (
          <div>
            <h2>Login</h2>
            <button
              className="w-16 h-16 max-w-xs bg-red-200 max-h-16"
              onClick={login}
            />
          </div>
        ) : (
          <div>
            <h2>Logout</h2>
            <button
              className="w-16 h-16 max-w-xs bg-red-200 max-h-16"
              onClick={logout}
            />
          </div>
        )}
      </main>
    </>
  )
}

export default Home
