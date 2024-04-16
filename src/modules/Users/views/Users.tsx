import { useSelector } from 'react-redux'
import { useFetching } from '@/hooks'
import { getUsers } from '@/state/users/user.actions'
import { RootState } from '@/state/store'
import { Input, Table } from '@/components'
import { Loading } from '@/views/Loading'
import { fields } from '../constants'

export const Users = () => {
  const { loading, users } = useSelector(({ users }: RootState) => users)

  useFetching(getUsers)

  return (
    <div className='card'>
      <Input id='search' type='search' className='w-60' label='Search' />
      {loading ? <Loading /> : <Table fields={fields} items={users} />}
    </div>
  )
}
