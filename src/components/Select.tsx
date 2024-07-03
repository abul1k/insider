import React, { ChangeEvent } from 'react'

interface Option {
  label: string
  value: string
}

interface SelectProps {
  options: Option[] | string[]
  onChange: (value: string) => void
  value?: string
  className?: string
  id?: string
  name?: string
  disabled?: boolean
  label?: string
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  className,
  id,
  name,
  disabled,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className={`${className} w-60`}>
      <label className='block text-sm mb-2' htmlFor={id}>
        {label && <span className='block mb-1'>{label}</span>}
        <select
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          className='bg-light dark:bg-darkGray dark:border-darkGray dark:text-light shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline focus:outline-2 focus:outline-primary'>
          {options.map((option, idx) =>
            typeof option === 'object' ? (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ) : (
              <option key={idx} value={option}>
                {option}
              </option>
            )
          )}
        </select>
      </label>
    </div>
  )
}
