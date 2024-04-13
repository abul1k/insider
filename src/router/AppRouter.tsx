import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { NotFound404 } from '@/views/NotFound404'
import auth from '@/views/auth/router'
import users from '@/modules/Users/router'
import home from '@/modules/Home/router'

export const AppRouter = () => {
  const mainRoutes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <NotFound404 />,
      children: [...home, ...users],
    },
    {
      path: '/',
      element: <AuthLayout />,
      errorElement: <NotFound404 />,
      children: [...auth],
    },
  ])

  return <RouterProvider router={mainRoutes} />
}
