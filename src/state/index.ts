import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  AnyAction
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from 'state/users/reducer';

const rootReducer = combineReducers({
  users: userReducer
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, composedEnhancer);

type RootState = ReturnType<typeof rootReducer>;
export type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

export default store;
