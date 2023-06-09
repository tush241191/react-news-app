import {useSelector} from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'
import {RootState} from 'src/store/store'

import {APP_ROUTES} from './router'

const PublicRoute = () => {
  const auth = useSelector((state: RootState) => state.auth)

  if (auth.isAuthenticated) return <Navigate to={APP_ROUTES.NEWS} replace />
  return <Outlet />
}

const PrivateRoute = () => {
  const auth = useSelector((state: RootState) => state.auth)

  if (!auth.isAuthenticated) return <Navigate to={APP_ROUTES.ROOT} replace />
  return <Outlet />
}

export {PrivateRoute, PublicRoute}
