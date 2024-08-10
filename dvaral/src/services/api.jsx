import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Beared ${token}`;
        }

        return config;
    }, (error) => {
        return Promise.reject(error);
    }

);

const SignUpData = (name, email, password, role) => axiosInstance.post(`${baseURL}/v1/auth/register`, {name, email, password, role});

export {axiosInstance, SignUpData}

