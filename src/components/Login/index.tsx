import { LockClosedIcon, UserIcon } from '@heroicons/react/20/solid'
import { Input } from 'components/Input'
import Loading from 'components/Loading'
import { useState } from 'react'

export default function LoginBody() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signIn(login: any) {
    const response = await fetch(
      'https://get-moments.herokuapp.com/auth/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
      }
    )
    return response.status
  }

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true)
    e.preventDefault()

    const data = {
      email,
      password
    }
    const response = await signIn(data)
    if (response === 200) {
      setLoading(false)
      window.location.href = '/dashboard'
    }
    setLoading(false)
  }

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="rounded-md bg-blue-300 px-4 py-8 shadow-2xl sm:px-10">
            <div className="my-8 w-full">
              <img
                className="mx-auto h-12 w-auto"
                src="/images/getMoments-logo.png"
                alt="Logo getMoments"
              />
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="user"
                  icon={<UserIcon className="h-5 w-5 text-blue-400" />}
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  required
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="password"
                  icon={<LockClosedIcon className="h-5 w-5 text-blue-400" />}
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  required
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="rememberMe"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Lembrar
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="/emailVerification"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Esqueceu sua senha?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2  focus:ring-offset-2"
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black opacity-50">
          <div className="rounded-md bg-white p-4">
            <Loading />
          </div>
        </div>
      )}
    </div>
  )
}
