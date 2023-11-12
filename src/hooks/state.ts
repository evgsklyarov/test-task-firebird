import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { InitialState as UsersState } from 'state/users/reducer';
import { AppDispatch } from 'state';

interface AppState {
  users: UsersState;
}

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
