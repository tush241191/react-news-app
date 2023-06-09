import CryptoJS from 'crypto-js'

const secretKey = process.env.REACT_APP_SECRET_KEY || 'YourSecretKey'

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message
  }
  return String(error)
}

export function encryptData(data: string) {
  return CryptoJS.AES.encrypt(data, secretKey).toString()
}

export function decryptData(encryptedData: string) {
  return CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8)
}
