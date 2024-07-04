import { InputHTMLAttributes, forwardRef } from 'react'
import { Icons } from './Icons'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  className?: string
  type?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, className, type, error, ...props }, ref) => {
    return (
      <div className={`${className} min-w-60`}>
        <label className='block text-sm mb-2' htmlFor={id}>
          {label && <span className='block mb-1'>{label}</span>}
          {type === 'search' ? (
            <div className='focus-on-input flex items-center gap-2 bg-light dark:bg-darkGray dark:border-darkGray dark:text-light shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline focus:outline-2 focus:outline-primary'>
              <Icons
                icon='MagnifyingGlassIcon'
                className='w-1/12 h-4 text-secondary dark:text-light'
              />
              <input
                id={id}
                type='search'
                ref={ref}
                className='border-0 outline-none bg-inherit w-11/12'
                placeholder={props.placeholder || label}
                {...props}
              />
            </div>
          ) : (
            <input
              id={id}
              type={type}
              ref={ref}
              className='bg-light dark:bg-darkGray dark:border-darkGray dark:text-light shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline focus:outline-2 focus:outline-primary'
              placeholder={props.placeholder || label}
              {...props}
            />
          )}
          {error && <div className='text-danger mt-1'>{error}</div>}
        </label>
      </div>
    )
  }
)
