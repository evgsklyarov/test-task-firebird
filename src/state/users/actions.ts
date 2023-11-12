import { User } from 'interfaces/users';

import * as actionTypes from './types';
import { getUsers } from 'api/users';
import { AppDispatch } from 'state';

interface LoadhUsersStartAction {
  type: typeof actionTypes.LOAD_USERS_START;
}

interface LoadhUsersErrorAction {
  type: typeof actionTypes.LOAD_USERS_ERROR;
}

interface LoadhUsersSuccessAction {
  type: typeof actionTypes.LOAD_USERS_SUCCESS;
  payload: {
    users: User[];
  };
}

interface SetSearchQueryAction {
  type: typeof actionTypes.SET_SEARCH_QUERY;
  payload: {
    searchQuery: string;
  };
}

interface SetFilteredUsersAction {
  type: typeof actionTypes.SET_FILTERED_USERS;
  payload: {
    filteredUsers: User[];
  };
}

interface DeleteUserAction {
  type: typeof actionTypes.DELETE_USER;
  payload: {
    userId: number;
  };
}

interface SetSelectedUserAction {
  type: typeof actionTypes.SET_SELECTED_USER;
  payload: {
    selectedUser: User | null;
  };
}

interface ResetStateAction {
  type: typeof actionTypes.RESET_STATE;
}

export const loadUsersStart = (): LoadhUsersStartAction => ({
  type: actionTypes.LOAD_USERS_START
});

export const loadUsersError = (): LoadhUsersErrorAction => ({
  type: actionTypes.LOAD_USERS_ERROR
});

export const loadUsersSuccess = (users: User[]): LoadhUsersSuccessAction => ({
  type: actionTypes.LOAD_USERS_SUCCESS,
  payload: {
    users
  }
});

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadUsersStart());

    const res = await getUsers();

    dispatch(loadUsersSuccess(res));
  } catch (error) {
    dispatch(loadUsersError());
    throw error;
  }
};

export const setSearchQuery = (searchQuery: string): SetSearchQueryAction => ({
  type: actionTypes.SET_SEARCH_QUERY,
  payload: {
    searchQuery
  }
});

export const setSelectedUser = (selectedUser: User | null): SetSelectedUserAction => ({
  type: actionTypes.SET_SELECTED_USER,
  payload: {
    selectedUser
  }
});

export const setFilteredUsers = (
  filteredUsers: User[]
): SetFilteredUsersAction => ({
  type: actionTypes.SET_FILTERED_USERS,
  payload: {
    filteredUsers
  }
});

export const deleteUser = (userId: number): DeleteUserAction => ({
  type: actionTypes.DELETE_USER,
  payload: {
    userId
  }
});

export const resetState = (): ResetStateAction => ({
  type: actionTypes.RESET_STATE
});

export type UsersActions =
  | LoadhUsersStartAction
  | LoadhUsersErrorAction
  | LoadhUsersSuccessAction
  | SetSearchQueryAction
  | SetFilteredUsersAction
  | SetSelectedUserAction
  | DeleteUserAction
  | ResetStateAction;
