import axios from 'axios'

const success = res => res
const error = err => {
  if (error.response.status === 401 && !error.config._retry) {
    error.config._retry = true;
    window.location = '/'
  } else {
    return Promise.reject(err)
  }
}

axios.interceptors.response.use(success, error)