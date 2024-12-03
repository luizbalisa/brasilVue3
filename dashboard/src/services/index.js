import axios from 'axios'
import AuthService from './auth'
import UserService from './users'
import router from '../router'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000/'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(new Error(error))

)

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const canThrowError = (error.request.status === 0 || error.request === 500)

    if (canThrowError) 
      throw new Error(error.message)

    if (error.request.status === 401) 
      router.push({ name: 'Home' })

    return error
  }
)

export default {
  auth: AuthService(httpClient),
  users: UserService(httpClient)
}
