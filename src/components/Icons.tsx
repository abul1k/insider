import { FC } from 'react'
import * as HIcons from '@heroicons/react/24/solid'
import * as HIconsOutline from '@heroicons/react/24/outline'

interface IProps {
  icon: keyof typeof HIcons
  className: string
  outline?: boolean
}

interface ISidebarProps {
  icon: string
  className: string
  outline?: boolean
}

export const Icons: FC<IProps> = ({ icon, className, outline }) => {
  const IconComponent = outline ? HIconsOutline[icon] : HIcons[icon]

  return <IconComponent className={className} aria-hidden="true" />
}

export const SidebarIcons: FC<ISidebarProps> = ({
  icon,
  className,
  outline,
}) => {
  const IconComponent = outline
    ? HIconsOutline[icon as keyof typeof HIconsOutline]
    : HIcons[icon as keyof typeof HIcons]

  return <IconComponent className={className} aria-hidden="true" />
}
