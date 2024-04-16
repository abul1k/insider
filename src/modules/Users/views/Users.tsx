import { useSelector } from 'react-redux'
import { useFetching } from '@/hooks'
import { getUsers } from '@/state/users/user.actions'
import { RootState } from '@/state/store'
import { Table } from '@/components'
import { fields } from '../constants'
import { Loading } from '@/views/Loading'

export const Users = () => {
  const { loading, users } = useSelector(({ users }: RootState) => users)

  useFetching(getUsers)

  return (
    <div className='card'>
      {loading ? <Loading /> : <Table fields={fields} items={users} />}
    </div>
  )
}
