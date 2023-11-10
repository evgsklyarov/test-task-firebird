import * as actionTypes from './types';

export const setUsers = (users: any) => ({
  type: actionTypes.SET_USERS,
  payload: {
    users
  },
})