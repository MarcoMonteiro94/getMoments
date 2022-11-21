import { EnvelopeIcon } from '@heroicons/react/24/outline'

type InputProps = {
  label?: string
  error?: string
  icon?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({ label, error, icon, ...rest }: InputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative mt-1">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
        <input
          className={`block w-full appearance-none rounded-sm border border-gray-300  py-2 ${
            icon ? 'px-10' : 'px-3'
          } placeholder-gray-400 shadow-sm placeholder:text-center focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
          {...rest}
        />
      </div>
      {error && <p className="pt-2 text-red-500">{error}</p>}
    </div>
  )
}
