import { APPLICATION_API_PATH, APPLICATION_PATH } from './services/path';

import axios from 'axios';
import { decryptToken } from 'app/helpers/utils/encrypt/encrypt';
import { getCookie } from 'app/helpers/utils/cookie/cookie';
import { useNavigate } from 'react-router-dom';

export const BASE_URL = 'https://api.abysshub.com/'

export const axiosInstance = axios.create({
  baseURL: APPLICATION_API_PATH.BASE,
})

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
      
    const cryptedToken = await getCookie('token')
    let accessToken = null
    
    if (!cryptedToken) {
        return config
    }
    
    accessToken = decryptToken(cryptedToken)
    
    config.baseURL = BASE_URL
    if (accessToken !== null && accessToken !== '') {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    } else {
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)


//interceptor error handling for API calls
axiosInstance.interceptors.response.use(
    (response) => {
        return response
    }
    ,
    (error) => {

        let navigate = useNavigate();
        if (error.response.status === 401) {
            navigate(APPLICATION_PATH.UNAUTHORIZED)
        }
        if (error.response.status === 403) {
            navigate(APPLICATION_PATH.LOGIN)
        }
        if (error.response.status === 500) {
            navigate(APPLICATION_PATH.SERVER_ERROR)
        }
        return Promise.reject(error)
    }
)
