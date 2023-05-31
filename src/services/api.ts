import axios from 'axios';

//const apiURL = import.meta.env.VITE_API_URL

const api = axios.create({
    //baseURL: 'https://json-server-ex-gq2u.onrender.com',
    //baseURL: 'http://localhost:5000',
    baseURL: 'https://site-pessoal-api-0f6p.onrender.com/api'
});

export default api;