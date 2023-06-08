import {LoginForm} from 'src/feature/auth/types'
import {removeAuthData, setAuthData} from 'src/utils/auth'
import {getErrorMessage} from 'src/utils/utils'

export const useAuth = () => {
  const login = async(data: LoginForm) => {
    try {
      setAuthData(JSON.stringify(data))
      // Redirect to dashboard
    } catch (error) {
      let message = 'Something went wrong'
      const err = getErrorMessage(error)
      if (err) {
        message = err
      }
      throw new Error(message)
    }
  }

  const logout = () => {
    removeAuthData()
  }

  return {login, logout}
}
