import { IResponse } from '../interfaces'

export interface IUserState {
  loading: boolean
  users: IResponse<IUser>
}

export interface IUser {
  _id: string
  username: string
  createdAt: string
  roles: string[]
}
