import {Navigate, Outlet} from 'react-router-dom'
import {useAuth} from 'src/hooks/useAuth'

import {APP_ROUTES} from './router'

const PublicRoute = () => {
  const {isAuthenticated} = useAuth()

  if (isAuthenticated()) return <Navigate to={APP_ROUTES.NEWS} replace />
  return <Outlet />
}

const PrivateRoute = () => {
  const {isAuthenticated} = useAuth()

  if (!isAuthenticated()) return <Navigate to={APP_ROUTES.ROOT} replace />
  return <Outlet />
}

export {PrivateRoute, PublicRoute}
