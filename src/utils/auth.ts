import {APP_VARIABLES} from './constants'
import {decryptData, encryptData} from './utils'

const KEY_TOKEN = APP_VARIABLES.LOCAL_STORAGE_KEY

export const getAuthData = (): string => {
  const data = localStorage.getItem(KEY_TOKEN)
  if(data) return decryptData(data)
  return ''
}

export const setAuthData = (auth: string): void => {
  const data = encryptData(auth)
  localStorage.setItem(KEY_TOKEN, data)
}

export const removeAuthData = (): void => {
  localStorage.removeItem(KEY_TOKEN)
  localStorage.clear()
}
