import { getUserData } from '@/jwt/jwtService'
import { PropsWithChildren, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { sidebarItems } from '@/layouts/constants'
import { check } from '@/utils/check'
import { NotFound404 } from '@/views/NotFound404'

type ProtectedRouteProps = PropsWithChildren

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate()
  const user = getUserData()
  const { pathname } = useLocation()
  const currentRoute = sidebarItems.find((route) => route.path == pathname)

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true })
    }
  }, [navigate, user, currentRoute])

  return currentRoute && check(currentRoute.permission) ? (
    children
  ) : (
    <NotFound404 />
  )
}
