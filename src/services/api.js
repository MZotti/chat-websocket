import axios from 'axios';

const API_INSTANCE = axios.create({
	baseURL: 'http://localhost:8000/api/',
});

export const API = API_INSTANCE;