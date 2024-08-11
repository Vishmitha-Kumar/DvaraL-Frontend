import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }, (error) => {
        return Promise.reject(error);
    }

);

const SignUpData = (name, email, password, role) => 
    axiosInstance.post(`${baseURL}/v1/auth/register`, {name, email, password, role});

const addHallDetails = (hallOwner, hallName, hallType, hallLocation,hallDescription, hallAddress,capacity , hallPrice, hallRating, hallStatus, hallContact ) => 
    axiosInstance.post(`${baseURL}/v2/halls/add-halls`, {hallOwner, hallName, hallType, hallLocation,hallDescription, hallAddress,capacity , hallPrice, hallRating, hallStatus, hallContact}, {
        'Content-Type': 'application/json'
      });


const getAllHalls = () =>
    axiosInstance.get(`${baseURL}/v2/halls/fetch/all-halls`);

const getHallByid = (hallID) =>
    axiosInstance.get(`${baseURL}/v2/halls/fetch/${hallID}`);

const bookHall = (hallID, userName, userEmail, userPhone, requestedDate, requestedTime , noOfGuest, eventType, specialRequests, bookingStatus) =>
    axiosInstance.post(`${baseURL}/v2/hall/add/booking-details/${hallID}`, {userName, userEmail, userPhone, requestedDate, requestedTime , noOfGuest, eventType, specialRequests, bookingStatus});



export {axiosInstance, SignUpData, addHallDetails, getAllHalls, getHallByid, bookHall}

