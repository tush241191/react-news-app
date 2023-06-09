import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useAuth} from 'src/hooks/useAuth'
import {APP_ROUTES} from 'src/router/router'
import {RootState} from 'src/store/store'
import {APP_ASSETS} from 'src/utils/constants'

const Header = () => {
  const {logout} = useAuth()
  const user = useSelector((state: RootState) => state.auth.user)

  const handleOnclickLogout = () => {
    logout()
  }

  return (
    <header className="py-2 bg-white shadow-sm lg:static lg:overflow-y-visible">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex lg:static xl:col-span-2">
            <div className="flex items-center flex-shrink-0">
              <Link to={APP_ROUTES.ROOT}>
                <img className="block w-auto h-10" src={APP_ASSETS.LOGO} alt="News App" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end xl:col-span-4">
            {user &&
              <div className="mt-4 text-left sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-base font-medium text-gray-900">Welcome,</p>
                <p className="text-sm font-medium text-gray-600 truncate">{user.email}</p>
              </div>
            }
            <button
              onClick={handleOnclickLogout}
              className="inline-flex items-center px-3 py-2 ml-6 text-sm font-semibold text-blue-500 bg-transparent border border-blue-500 rounded-md shadow-sm hover:text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
