export interface IResponse<T> {
  limit: number
  page: number
  total: number
  results: T[]
}

export interface IParams {
  search?: string
  limit: number
  page: number
}
