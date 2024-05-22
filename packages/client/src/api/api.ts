import axios, { AxiosResponse, Method, AxiosError } from 'axios'
import { ROUTES } from '../routes/constants'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export const fetchData = async <T>({
  url,
  method = 'get',
  params,
  data,
}: {
  url: string
  method?: Method
  params?: any
  data?: any
}): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.request({
      url,
      method,
      params,
      data,
    })

    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message)
  }
}

export const setupInterceptors = (onUnauthenticated: () => void) => {
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    },
  )

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        onUnauthenticated()
        window.location.href = ROUTES.LOGIN

        throw new Error('Session expired. Please sign in again.')
      }
      return Promise.reject(error)
    },
  )
}
