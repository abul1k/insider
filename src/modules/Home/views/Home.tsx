import { Input, Select } from '@/components'
import { useState } from 'react'

export const Home = () => {
  const [selectItems] = useState(['Apple', 'Google', ' Facebook', 'Twitter'])

  return (
    <div className='card'>
      <h1 className='text-4xl'>Home</h1>
      <div className='flex gap-2'>
        <Select
          label='Select'
          id='select'
          options={selectItems}
          onChange={(e) => console.log(e)}
        />

        <Input
          id='search'
          type='search'
          label='Search'
          onChange={(e) => console.log(e)}
        />
      </div>
    </div>
  )
}
