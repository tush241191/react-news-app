import {lazy, Suspense} from 'react'
import {Outlet, RouteObject} from 'react-router-dom'
import Loading from 'src/components/loading/Loading'
import BaseLayout from 'src/layouts/BaseLayout'

import {APP_ROUTES} from './router'

const SuspenseLoader = (Component: React.ComponentType) => () =>
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>

const Login = SuspenseLoader(lazy(() => import('../feature/auth/login/Login')))

const BaseLayoutView = () => {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  )
}

const publicRoutes: RouteObject[] = [
  {
    element: <BaseLayoutView />,
    children: [
      {path: APP_ROUTES.ROOT, element: <Login />},
      {path: APP_ROUTES.LOGIN, element: <Login />}
    ]
  }
]

export const router: RouteObject[] = [
  ...publicRoutes
]
