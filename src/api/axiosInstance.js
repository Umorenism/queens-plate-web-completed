import axios from 'axios';

const baseURL = 'https://api.queensplate.store/api/v1';

const axiosInstance = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    
    
    if (error.response?.status === 401) {
      
      console.warn('Unauthorized - Token expired or invalid');
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;