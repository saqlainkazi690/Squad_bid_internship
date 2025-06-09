import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/group' });

export const createGroup = (data) => API.post('/', data);
export const joinGroup = (referralCode, userId) => API.post(`/join/${referralCode}`, { userId });
export const getGroup = (referralCode) => API.get(`/${referralCode}`);
