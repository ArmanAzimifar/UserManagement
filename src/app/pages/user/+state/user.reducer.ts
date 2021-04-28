import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { User, UserDetail } from './models/user';
import * as userAction from './user.actions';

export const USER_KEY = 'user';

export interface State extends EntityState<User> {
  error: string;
  loaded: boolean;
  user: UserDetail;
}

export interface UserPartialState {
  readonly [USER_KEY]: State;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = userAdapter.getInitialState({
  error: '',
  loaded: false,
  user: null
});

const usersReducer = createReducer(
  initialState,
  on(
    userAction.loadUserDetail,
    (state) => ({ ...state, loaded: false })
  ),
  on(
    userAction.userDetailLoadedSuccessfully,
    (state, { user }) => ({ ...state, loaded: true, user })
  ),
  on(
    userAction.loadUsers,
    (state) => ({ ...state, loaded: false })
  ),
  on(
    userAction.usersLoadedSuccessfully,
    (state, { users }) => (userAdapter.setAll(users, { ...state, loaded: true }))
  ),
  on(
    userAction.loadingFailed,
    (state, { reason }) => ({ ...state, error: reason, loaded: true })
  ),
);


export function reducer(state: State | undefined, action: Action): State {
  return usersReducer(state, action);
}
