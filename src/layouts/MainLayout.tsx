import { Sidebar } from './bars/Sidebar'
import { Navbar } from './bars/Navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="bg-lightGray dark:bg-darkGray min-h-[100vh] md:pl-[16vw] px-[1vw] py-[95px]">
        <Outlet />
      </div>
    </>
  )
}
