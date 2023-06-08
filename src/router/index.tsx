import {lazy, Suspense} from 'react'
import {RouteObject} from 'react-router-dom'
import Loading from 'src/components/loading/Loading'
import BaseLayout from 'src/layouts/BaseLayout'
import LayoutView from 'src/layouts/LayoutView'
import NewsLayout from 'src/layouts/NewsLayout'

import {PrivateRoute, PublicRoute} from './middleware'
import {APP_ROUTES} from './router'

const SuspenseLoader = (Component: React.ComponentType) => () =>
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>

const Login = SuspenseLoader(lazy(() => import('../feature/auth/login/Login')))
const News = SuspenseLoader(lazy(() => import('../feature/news/News')))

const publicRoutes: RouteObject[] = [
  {
    element: <PublicRoute />,
    children: [
      {
        element: <LayoutView Component={BaseLayout} />,
        children: [
          {path: APP_ROUTES.ROOT, element: <Login />},
          {path: APP_ROUTES.LOGIN, element: <Login />}
        ]
      }
    ]
  }
]

const privateRoutes: RouteObject[] = [
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <LayoutView Component={NewsLayout} />,
        children: [
          {path: APP_ROUTES.NEWS, element: <News />}
        ]
      }
    ]
  }
]

export const router: RouteObject[] = [
  ...publicRoutes,
  ...privateRoutes
]
