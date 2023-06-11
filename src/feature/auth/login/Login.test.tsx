import {fireEvent, render, screen} from '@testing-library/react'
import React from 'react'

import Login from './Login'

jest.mock('src/hooks/useAuth', () => ({
  __esModule: true,
  useAuth: () => ({
    login: jest.fn()
  })
}))

describe('Login', () => {
  it('renders the login form', () => {
    render(<Login />)

    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('API Key')).toBeInTheDocument()
    expect(screen.getByText('Sign in')).toBeInTheDocument()
  })

  it('enables the sign-in button when the form is valid', () => {
    render(<Login />)

    const signInButton = screen.getByRole('button', {name: 'Sign in'})
    expect(signInButton).toBeDisabled()

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: {value: 'test@example.com'}
    })
    fireEvent.change(screen.getByLabelText('API Key'), {
      target: {value: '1234567890'}
    })

    expect(signInButton).toBeEnabled()
  })

})
