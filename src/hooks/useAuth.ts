import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {LoginForm} from 'src/feature/auth/types'
import {APP_ROUTES} from 'src/router/router'
import {loginFailure, loginSuccess, logoutRequest} from 'src/store/authSlice'
import {getErrorMessage} from 'src/utils/utils'

export const useAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = async(data: LoginForm) => {
    try {
      dispatch(loginSuccess(data))
      navigate(APP_ROUTES.NEWS)
    } catch (error) {
      let message = 'Something went wrong'
      const err = getErrorMessage(error)
      if (err) {
        message = err
      }
      dispatch(loginFailure(message))
    }
  }

  const logout = (): void => {
    dispatch(logoutRequest())
    navigate(APP_ROUTES.ROOT)
  }

  return {login, logout}
}
