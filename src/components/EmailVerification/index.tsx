import Loading from 'components/Loading'
import { useState } from 'react'

export default function EmailVerificationBody() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true)
    e.preventDefault()

    const data = {
      email,
      password
    }
    // await signIn(data)
    setLoading(false)
  }

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4sm:px-10 py-8">
            <div className="my-8 w-full">
              <img
                className="mx-auto h-12 w-auto"
                src="/images/mobilize-logo.png"
                alt="Logo Mobilize"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Digite seu e-mail
              </h2>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-mail
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={({ target }) => setEmail(target.value)}
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2  focus:ring-offset-2"
                  >
                    Recuperar
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
