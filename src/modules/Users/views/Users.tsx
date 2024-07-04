import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '@/state/users/user.actions'
import { AppDispatch, RootState } from '@/state/store'
import { Input, Pagination, Spinner } from '@/components'
import { formatDate } from '@/utils/commons'
import { useEffect, useState } from 'react'
import { IParams } from '@/state/interfaces'
import { useDebounce } from '@/hooks'

const filterState: IParams = {
  search: '',
  limit: 10,
  page: 1,
}

export const Users = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, users } = useSelector(({ users }: RootState) => users)
  const [filters, setFilters] = useState<IParams>(filterState)
  const debouncedSearch = useDebounce(filters, 300)

  const handlePageChange = (page: number) => {
    setFilters({ ...filters, page })
  }

  useEffect(() => {
    dispatch(getUsers({ ...debouncedSearch }))
  }, [dispatch, debouncedSearch])

  return (
    <div className='card'>
      <Input
        id='search'
        type='search'
        label='Search'
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />
      {loading ? (
        <Spinner />
      ) : (
        users.results.map((user) => (
          <div key={user._id} className='my-4'>
            <h1>{user.username}</h1>
            <p>{formatDate(user.createdAt, true)}</p>
          </div>
        ))
      )}

      <Pagination
        className='flex justify-center'
        currentPage={filters.page}
        perPage={filters.limit}
        total={users.total}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
