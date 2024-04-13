/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from '@/components'
import $axios from '@/plugins/axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface IUser {
  id: string
  username: string
  roles: string[]
}

export const Users = () => {
  const [users, setUsers] = useState<IUser[]>([])

  const fields = [
    { key: 'username', label: 'Username' },
    { key: 'roles', label: 'Role' },
  ]

  const getUserData = async () => {
    try {
      const { data } = await $axios.get('/users')
      setUsers(data)
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error || error?.response?.data?.message || error.message
      )
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className="card">
      <Table fields={fields} items={users} />
    </div>
  )
}
