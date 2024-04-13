import { getUserData } from '@/jwt/jwtService'
import { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type ProtectedRouteProps = PropsWithChildren

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = getUserData()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true })
    }
  }, [navigate, user])

  return children
}
