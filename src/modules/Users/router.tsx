import ProtectedRoute from '@/router/ProtectedRoute'
import { UserDetails } from './views/UserDetails'
import { Users } from './views/Users'

const routes = [
  {
    path: '/users',
    element: (
      <ProtectedRoute>
        <Users />
      </ProtectedRoute>
    ),
  },
  {
    path: '/users/:id',
    element: (
      <ProtectedRoute>
        <UserDetails />
      </ProtectedRoute>
    ),
  },
]

export default routes
