import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from 'src/store/store'
import {getErrorMessage} from 'src/utils/utils'

const useApi = () => {
  const apiKey = useSelector((state: RootState) => state.auth.user?.apiKey)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  })

  const getRequest = async <T>(url: string, config?: AxiosRequestConfig) => {
    setLoading(true)
    try {
      const response: AxiosResponse<T> = await apiClient.get(url, config)
      setLoading(false)
      return response.data
    } catch (error) {
      setLoading(false)
      if (axios.isAxiosError(error)) {
        let message = 'Something went wrong'
        const err = getErrorMessage(error)
        if (err) {
          message = err
        }
        if (error.response?.status === 401) {
          message = 'Invalid API key. Please logout and signin with valid API key.'
        }
        setError(message)
      } else {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    return () => {
      setError(null)
    }
  }, [])

  return {
    loading,
    error,
    getRequest
  }
}

export default useApi
