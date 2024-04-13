import $axios from '@/plugins/axios'
import { ILoginData, IRegisterData } from '@/views/auth/interface'
import { IUserData } from './interface'
import {
  loginEndpoint,
  refreshEndpoint,
  refreshTokenKeyName,
  registerEndpoint,
  tokenKeyName,
} from './jwt.config'

export async function login(
  args: ILoginData
): Promise<{ data: { access: string; refresh: string } }> {
  const { data } = await $axios.post(loginEndpoint, args)
  setAccessToken(data.access)
  // setRefreshToken(data.refresh)

  return data
}

export function logout() {
  document.cookie = 'access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  document.cookie = 'refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

export function register(args: IRegisterData): Promise<IUserData> {
  return $axios.post(registerEndpoint, args)
}

export function setAccessToken(value: string): void {
  setCookie(tokenKeyName, value, 7)
}

export function getAccessToken() {
  return getCookie(tokenKeyName)
}

export function setRefreshToken(value: string): void {
  setCookie(refreshTokenKeyName, value, 7)
}

export function getRefreshToken() {
  return getCookie(refreshTokenKeyName)
}

export function getUserData(): IUserData {
  return parseJWT(getCookie(tokenKeyName)).id;
}

export function refreshToken() {
  return $axios.post(refreshEndpoint, {
    refresh: getRefreshToken(),
  })
}

function setCookie(name: string, value: string, expirationDays: number) {
  const date = new Date()
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

function getCookie(name: string): string {
  const cookieString = document.cookie
  const cookieArray = cookieString.split('; ')
  for (const cookie of cookieArray) {
    const [key, value] = cookie.split('=')
    if (key === name) {
      return value
    }
  }
  return ""
}

function parseJWT(token: string) {
  if (token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  return {}
}
