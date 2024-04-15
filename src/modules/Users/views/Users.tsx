import { useSelector } from 'react-redux'
import { useFetching } from '@/hooks'
import { getUsers } from '@/state/users/user.actions'
import { RootState } from '@/state/store'
import { Table } from '@/components'

export const Users = () => {
  const { loading, users } = useSelector(({ users }: RootState) => users)

  const fields = [
    { key: 'username', label: 'Username' },
    { key: 'roles', label: 'Role' },
  ]

  useFetching(getUsers)

  return (
    <div className='card'>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <Table fields={fields} items={users} />
      )}
    </div>
  )
}
