import { legacy_createStore as createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import userReducer from 'state/users/reducer';

const rootReducer = combineReducers({
  users: userReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
