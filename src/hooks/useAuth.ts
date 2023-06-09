import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {LoginForm, User} from 'src/feature/auth/types'
import {APP_ROUTES} from 'src/router/router'
import {loginFailure, loginSuccess, logoutRequest} from 'src/store/authSlice'
import {removeAuthData, setAuthData} from 'src/utils/auth'
import {getErrorMessage} from 'src/utils/utils'

export const useAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = async(data: LoginForm) => {
    try {
      setAuthData(JSON.stringify(data))
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
    removeAuthData()
    dispatch(logoutRequest())
    navigate(APP_ROUTES.ROOT)
  }

  const validateUser = (): User | null => {
    // const authData = getAuthData()
    // if(authData){
    //   const data: User = JSON.parse(authData)
    //   if(data.apiKey !== '') return data
    // }
    return null
  }

  return {login, logout, validateUser}
}
