import { ISidebarItems } from "./interface";

export const sidebarItems: ISidebarItems[] = [
  {
    icon: 'HomeIcon',
    name: 'Home',
    path: '/home',
    children: [],
    permission: ['ADMIN', 'USER'],
  },
  {
    icon: 'UsersIcon',
    name: 'Users',
    path: '/users',
    permission: ['ADMIN'],
    children: []
  },
  // {
  //   icon: '',
  //   name: 'Knowledge Base',
  //   permission: ['ADMIN'],
  //   children: [
  //     {
  //       icon: '',
  //       name: 'Regions',
  //       path: '/regions',
  //       permission: ['ADMIN'],
  //     },
  //     {
  //       icon: '',
  //       name: 'Languages',
  //       path: '/languages',
  //       permission: ['ADMIN'],
  //     }
  //   ]
  // }
]