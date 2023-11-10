import * as actionTypes from './types';

const initialState = {
  users: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload.users
      };
    default:
      return state;
  }
}

export default reducer;
