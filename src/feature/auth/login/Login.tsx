import React, {SyntheticEvent, useEffect, useState} from 'react'
import CheckIcon from 'src/components/icons/CheckIcon'
import Modal from 'src/components/modal/Modal'
import {useAuth} from 'src/hooks/useAuth'

import {LoginForm} from '../types'

const defaultLoginFormValue: LoginForm = {
  email: '',
  apiKey: ''
}

const Login = () => {
  const {login} = useAuth()
  const [loginForm, setLoginForm] = useState<LoginForm>(defaultLoginFormValue)
  const [hasError, setHasError] = useState<boolean>(true)
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    setHasError(loginForm.email === '' || loginForm.apiKey === '')
  }, [loginForm])

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal)

  const handleInputChange = (key: string, value: string) => {
    setLoginForm({
      ...loginForm,
      [key]: value
    })
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    if (!hasError) {
      login(loginForm)
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
                htmlFor="apiKey"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                API Key
              </label>
              <div className="text-sm">
                <h3 onClick={toggleModal} className="font-semibold text-blue-600 cursor-pointer hover:text-blue-500">Need API Key?</h3>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={loginForm?.apiKey}
                onChange={event =>
                  handleInputChange('apiKey', event.target.value)
                }
                id="apiKey"
                name="apiKey"
                type="text"
                autoComplete="apiKey"
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

      <Modal
        onClose={toggleModal}
        visible={showModal}
        className="w-full max-w-[550px] rounded-xl bg-white px-8 py-6"
      >
        <Modal.Header headerText="How to get an API key?" onClose={toggleModal} />
        <div className="my-4">
          <ul className="space-y-6">
            <li className="relative flex gap-x-4">
              <div className="absolute top-0 left-0 flex justify-center w-6 -bottom-6">
                <div className="w-px bg-gray-200"></div>
              </div>
              <div className="relative flex items-center justify-center flex-none w-6 h-6 bg-white">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p className="py-0.5 text-base text-left leading-5 font-medium text-gray-900">Go to <a href="https://newsapi.org/register" target="_blank" rel="noreferrer" className="text-blue-500">https://newsapi.org/register</a></p>
            </li>
            <li className="relative flex gap-x-4">
              <div className="absolute top-0 left-0 flex justify-center w-6 -bottom-6">
                <div className="w-px bg-gray-200"></div>
              </div>
              <div className="relative flex items-center justify-center flex-none w-6 h-6 bg-white">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p className="py-0.5 text-base leading-5 font-medium text-gray-900">Register your account</p>
            </li>
            <li className="relative flex gap-x-4">
              <div className="absolute top-0 left-0 flex justify-center w-6 h-6">
                <div className="w-px bg-gray-200"></div>
              </div>
              <div className="relative flex items-center justify-center flex-none w-6 h-6 bg-white">
                <CheckIcon />
              </div>
              <p className="py-0.5 text-base leading-5 text-gray-500"><span className="font-medium text-gray-900">Copy API key</span> save safely for future use.</p>
            </li>
          </ul>
        </div>
        <div className="mt-5 sm:mt-6">
          <button onClick={toggleModal} type="button" className="inline-flex justify-center w-full px-3 py-2 text-base font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">I have an API key</button>
        </div>
      </Modal>
    </div>
  )
}

export default Login
