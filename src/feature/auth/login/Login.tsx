import React, {SyntheticEvent, useEffect, useState} from 'react'

import {LoginForm} from '../types'

const defaultLoginFormValue: LoginForm = {
  email: '',
  password: ''
}

const Login = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>(defaultLoginFormValue)
  const [hasError, setHasError] = useState<boolean>(true)

  useEffect(() => {
    if (loginForm.email === '' || loginForm.password === '') {
      setHasError(true)
    } else {
      setHasError(false)
    }
  }, [loginForm])

  const handleInputChange = (key: string, value: string) => {
    setLoginForm({
      ...loginForm,
      [key]: value
    })
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    if (!hasError) {
      console.log(loginForm)
    }
  }

  return (
    <div className="flex flex-col justify-center min-h-screen px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h3 className="text-xl font-bold text-center text-blue-600 underline">
          LOGO
        </h3>
        <h2 className="mt-5 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                value={loginForm?.email}
                onChange={event =>
                  handleInputChange('email', event.target.value)
                }
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                value={loginForm?.password}
                onChange={event =>
                  handleInputChange('password', event.target.value)
                }
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={hasError}
              className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                hasError
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'cursor-pointer bg-blue-600 hover:bg-blue-500'
              }`}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
