/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyntheticEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from '@/jwt/jwtService'
import { Input } from '@/components'

export const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      await register(user)
      toast.success('Successfully logged in')
      navigate('/login')
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error || error?.response?.data?.message || error.message
      )
    }
  }

  return (
    <div className="w-full md:max-w-xs ">
      <form
        className="bg-light flex items-center justify-center dark:bg-dark min-h-full h-screen md:h-full shadow-md rounded px-8 md:pt-6 pb-8 mb-4"
        onSubmit={onSubmit}>
        <div className="w-full">
          <h1 className="text-center text-3xl font-medium mb-5">
            Registration
          </h1>
          <Input
            className="mb-4"
            id="username"
            label="Username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <Input
            className="mb-6"
            id="password"
            label="Password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input
            className="cursor-pointer bg-primary w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Register"
          />
          <Link
            className="text-center block mt-4 text-primary hover:underline"
            to="/login">
            Do you have an account?
          </Link>
        </div>
      </form>
    </div>
  )
}
