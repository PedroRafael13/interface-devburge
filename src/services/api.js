import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3001'
})

api.interceptors.request.use((config) => {
  const useData = localStorage.getItem('DevBurger:data')

  const token = useData && JSON.parse(useData).token

  config.headers.authorization = `Bearer ${token}`

  return config
})