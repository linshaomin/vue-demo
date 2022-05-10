import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: '/api',
  timeout: 60 * 60 * 1000 // request timeout
})

// response interceptor
service.interceptors.response.use(
  (response) => {
    console.log('res', response)
    const res = response.data
    if (response.config.responseType === 'blob') {
      return res
    }
    if (res.code !== 200) {
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
