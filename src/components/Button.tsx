import { ButtonHTMLAttributes } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element | JSX.Element[]
}

export const Button = ({ children, ...props }: IProps) => {
  return (
    <button className='bg-primary' {...props}>
      {children}
    </button>
  )
}
