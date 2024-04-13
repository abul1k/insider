import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <>
      <div className='flex justify-center md:items-center w-[100vw] h-[100vh] bg-lightGray dark:bg-darkGray'>
        <Outlet />
      </div>
    </>
  )
}
