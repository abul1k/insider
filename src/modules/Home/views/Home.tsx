import { useState } from 'react'
import { Input, Select } from '@/components'

export const Home = () => {
  const [selectItems] = useState(['Apple', 'Google', 'Facebook', 'Twitter'])

  return (
    <div className='card'>
      <h1 className='text-4xl'>Home</h1>
      <div className='flex gap-2 mt-5'>
        <Input
          id='search'
          type='search'
          label='Search'
          onChange={(e) => console.log(e)}
        />

        <Select
          label='Select'
          id='select'
          options={selectItems}
          onChange={(e) => console.log(e)}
        />
      </div>
    </div>
  )
}
