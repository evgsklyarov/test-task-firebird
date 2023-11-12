import { User } from 'interfaces/users';

import * as actionTypes from './types';
import { UsersActions } from './actions';

export interface InitialState {
  users: User[];
  filteredUsers: User[];
  selectedUser: User | null;
  searchQuery: string;
  loading: boolean;
  error: boolean;
}

const initialState: InitialState = {
  users: [],
  filteredUsers: [],
  selectedUser: null,
  searchQuery: '',
  loading: true,
  error: false
};

const reducer = (state = initialState, action: UsersActions): InitialState => {
  switch (action.type) {
    case actionTypes.LOAD_USERS_START:
      return {
        ...state,
        loading: true,
        error: false
      };
    case actionTypes.LOAD_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case actionTypes.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        users: action.payload.users,
        filteredUsers: action.payload.users
      };
    case actionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload.searchQuery
      };
    case actionTypes.SET_FILTERED_USERS:
      return {
        ...state,
        filteredUsers: action.payload.filteredUsers
      };
    case actionTypes.SET_SELECTED_USER: {
      return {
        ...state,
        selectedUser: action.payload.selectedUser
      };
    }
    case actionTypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.userId),
        filteredUsers: state.filteredUsers.filter(
          (user) => user.id !== action.payload.userId
        )
      };
    case actionTypes.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
