import {useNavigate} from 'react-router-dom'
import {LoginForm} from 'src/feature/auth/types'
import {APP_ROUTES} from 'src/router/router'
import {removeAuthData, setAuthData} from 'src/utils/auth'
import {getErrorMessage} from 'src/utils/utils'

export const useAuth = () => {
  const navigate = useNavigate()

  const login = async(data: LoginForm) => {
    try {
      setAuthData(JSON.stringify(data))
      navigate(APP_ROUTES.NEWS)
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
    navigate(APP_ROUTES.ROOT)
  }

  return {login, logout}
}
