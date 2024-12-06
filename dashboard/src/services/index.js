import axios from 'axios'
import AuthService from './auth'
import UserService from './users'
import router from '../router'
import { setGlobalLoading } from '../store/global'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000/'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})

httpClient.interceptors.request.use(
  setGlobalLoading(true),
  (config) => {
    const token = localStorage.getItem('token')
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(new Error(error))

)

httpClient.interceptors.response.use(
  (response) =>{ 
      setGlobalLoading(false)
      return response 
  },
  (error) => {
    const canThrowError = (error.request.status === 0 || error.request === 500)

    if (canThrowError){
      setGlobalLoading(false)
      throw new Error(error.message)
    }

    if (error.request.status === 401) 
      router.push({ name: 'Home' })
    setGlobalLoading(false)
    return error
  }
)

export default {
  auth: AuthService(httpClient),
  users: UserService(httpClient)
}
