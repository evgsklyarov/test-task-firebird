import axios from 'api';

export const getUsers = () => axios.get('/users');
