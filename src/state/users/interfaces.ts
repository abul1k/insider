export interface IUserState {
  loading: boolean;
  users: IUser[]
}

export interface IUser {
  id: string
  username: string
  roles: string[]
}