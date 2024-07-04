/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '@/jwt/jwtService'
import { Input } from '@/components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const scheme = z.object({
  username: z.string().nonempty('Username is required'),
  password: z.string().min(4),
})

type FormFields = z.infer<typeof scheme>

export const Login = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(scheme),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await login(data)
      toast.success('Successfully logged in')
      navigate('/home')
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error.message
      )
    }
  }

  return (
    <div className='w-full md:max-w-xs '>
      <form
        className='bg-light flex items-center justify-center dark:bg-dark min-h-full h-screen md:h-full shadow-md rounded px-8 md:pt-6 pb-8 mb-4'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full'>
          <h1 className='text-center text-3xl font-medium mb-5'>Login</h1>
          <Input
            className='mb-4'
            id='username'
            label='Username'
            type='text'
            {...register('username')}
            error={errors.username?.message}
          />
          <Input
            className='mb-6'
            id='password'
            label='Password'
            type='password'
            {...register('password')}
            error={errors.password?.message}
          />
          <input
            className='cursor-pointer bg-primary w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            value='Sign In'
          />
          <Link
            className='text-center block mt-4 text-primary hover:underline'
            to='/register'>
            Do not have account yet?
          </Link>
        </div>
      </form>
    </div>
  )
}
