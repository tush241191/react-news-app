import {APP_VARIABLES} from './constants'

const KEY_TOKEN = APP_VARIABLES.LOCAL_STORAGE_KEY

export const getAuthData = (): string => {
  return localStorage.getItem(KEY_TOKEN) || ''
}

export const setAuthData = (auth: string): void => {
  localStorage.setItem(KEY_TOKEN, auth)
}

export const removeAuthData = (): void => {
  localStorage.removeItem(KEY_TOKEN)
  localStorage.clear()
}
