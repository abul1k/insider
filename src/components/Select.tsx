import React, { ChangeEvent } from 'react'

interface Option {
  label: string
  value: string
}

interface SelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  className?: string
  id?: string
  name?: string
  disabled?: boolean
}

export const Select: React.FC<SelectProps> = ({
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
    <select
      className={className}
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      disabled={disabled}>
      {options.map((option) => (
        <option className='text-dark' key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
