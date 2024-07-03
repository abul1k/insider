import { InputHTMLAttributes } from 'react'
import { Icons } from './Icons'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  className?: string
  type?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  className,
  type,
  ...props
}) => {
  return (
    <div className={`${className} w-60`}>
      <label className='block text-sm mb-2' htmlFor={id}>
        {label && <span className='block mb-1'>{label}</span>}
        {type === 'search' ? (
          <div className='focus-on-input flex items-center gap-2 bg-light dark:bg-darkGray dark:border-darkGray dark:text-light shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline focus:outline-2 focus:outline-primary'>
            <Icons icon='MagnifyingGlassIcon' className='w-1/12 h-4 text-secondary dark:text-light' />
            <input
              id={id}
              type='search'
              className='border-0 outline-none bg-inherit w-11/12'
              placeholder={props.placeholder || label}
              {...props}
            />
          </div>
        ) : (
          <input
            id={id}
            type={type}
            className='bg-light dark:bg-darkGray dark:border-darkGray dark:text-light shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline focus:outline-2 focus:outline-primary'
            placeholder={props.placeholder || label}
            {...props}
          />
        )}
      </label>
    </div>
  )
}
