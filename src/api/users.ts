import axios from 'api';
import { User } from 'interfaces/users';

export const getUsers = (): Promise<User[]> => axios.get('/users');
