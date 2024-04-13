import { getAccessToken, logout } from '@/jwt/jwtService.js'
import axios from 'axios'

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_BACKEND,
  timeout: 20000,
  headers: { Accept: 'application/json' },
})

axiosIns.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token && config.headers) {
      config.headers.Authorization = 'Bearer ' + token
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosIns.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      logout()
      window.location.href = '/login'
    }

    return Promise.reject(error)
  }
)

export default axiosIns
