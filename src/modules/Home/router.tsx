import { Navigate, RouteObject } from 'react-router-dom'
import { Home } from './views/Home'
import ProtectedRoute from '@/router/ProtectedRoute'
import { getUserData } from '@/jwt/jwtService'

const routes: RouteObject[] = [
  {
    index: getUserData() && true,
    element: <Navigate to='/home' />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
]

export default routes
