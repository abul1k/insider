import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { sidebarItems } from '../constants'
import { ISidebarItems } from '../constants/interface'
import { Icons, SidebarIcons } from '@/components'
import { check } from '@/utils/check'

export const Sidebar = () => {
  const sidebar: ISidebarItems[] = sidebarItems
  const { pathname } = useLocation()

  return (
    <div className='sidebar close'>
      <div className='sidebar_container shadow'>
        <div className='sidebar_container_brand'>
          <h1 className='sidebar_container_brand_name'>
            <span className='text-primary'>I</span>nsider
          </h1>
          <button className='sidebar_container_brand_toggler'>
            <Icons icon='Bars3Icon' className='w-6 h-6 text-primary' />
          </button>
        </div>
        <div className='overflow-y-scroll h-[87%]'>
          {sidebar.map((route) => (
            <div key={route.path} className='sidebar_container_routes'>
              {check(route.permission) &&
                (route.path ? (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'sidebar_container_routes_route active'
                        : 'sidebar_container_routes_route'
                    }
                    to={route.path || '/'}>
                    <i>
                      <SidebarIcons
                        icon={route.icon || 'FolderIcon'}
                        className={`w-4 h-4 ${
                          pathname === route.path ? 'text-primary' : ''
                        }`}
                      />
                    </i>
                    <span>{route.name}</span>
                  </NavLink>
                ) : (
                  <div className='sidebar_container_routes_route-group'>
                    <div className='sidebar_container_routes_route-group_header'>
                      <i>
                        <SidebarIcons
                          icon={route.icon || 'FolderIcon'}
                          className={`w-4 h-4 ${
                            pathname === route.path
                              ? 'text-primary'
                              : 'text-light'
                          }`}
                        />
                      </i>
                      <span>{route.name}</span>
                    </div>
                    {route.children &&
                      route.children.map((child) => (
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? 'sidebar_container_routes_route-group_child active'
                              : 'sidebar_container_routes_route-group_child'
                          }
                          to={route.path || '/'}>
                          <i>
                            <SidebarIcons
                              icon={route.icon || 'FolderIcon'}
                              className={`w-4 h-4 ${
                                pathname === route.path ? 'text-primary' : ''
                              }`}
                            />
                          </i>
                          <span>{child.name}</span>
                        </NavLink>
                      ))}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
