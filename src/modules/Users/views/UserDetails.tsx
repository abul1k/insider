import { useParams } from 'react-router-dom'

export const UserDetails = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <h1 className='text-4xl'>Users {id}</h1>
    </div>
  )
}
