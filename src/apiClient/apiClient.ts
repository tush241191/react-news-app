import axios from 'axios'

const apiClient = () => {
  const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return client
}

const generateURL = (url: string, apiKey: string): string => {
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}apiKey=${apiKey}`
}

const requestGet = (url: string, apiKey: string) => {
  const apiURL = generateURL(url, apiKey)
  return apiClient().request({url: apiURL, method: 'get'})
}

export {apiClient, requestGet}
