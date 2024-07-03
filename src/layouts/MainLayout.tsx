import { Sidebar } from './bars/Sidebar'
import { Navbar } from './bars/Navbar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'

export const MainLayout = () => {
  const { isSidebarOpen } = useSelector(({ layout }: RootState) => layout)
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className={`bg-lightGray dark:bg-darkGray min-h-[100vh] px-[1vw] py-[95px] ${isSidebarOpen ? 'pl-[14vw]' : 'pl-[6vw]'}`}>
        <Outlet />
      </div>
    </>
  )
}
