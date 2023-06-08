import {Outlet} from 'react-router-dom'

const PublicRoute = () => {
  return <Outlet />
}

const PrivateRoute = () => {
  return <Outlet />
}

export {PrivateRoute, PublicRoute}
