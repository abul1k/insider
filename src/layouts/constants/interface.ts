export interface ISidebarItems {
  icon: string,
  name: string,
  path?: string,
  permission: string[]
  children?: ISidebarItems[]
}