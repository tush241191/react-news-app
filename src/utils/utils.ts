import {AES, enc} from 'crypto-js'

const secretKey = process.env.REACT_APP_SECRET_KEY || 'YourSecretKey'

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message
  }
  return String(error)
}

export function encryptData(data: string) {
  return AES.encrypt(data, secretKey).toString()
}

export function decryptData(encryptedData: string | CryptoJS.lib.CipherParams) {
  return AES.decrypt(encryptedData, secretKey).toString(enc.Utf8)
}
