import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, userAdapter, UserPartialState, USER_KEY } from './user.reducer';


export const selectUserState = createFeatureSelector<UserPartialState, State>(USER_KEY);

export const { selectAll } = userAdapter.getSelectors();

export const selectLoaded = createSelector(
  selectUserState,
  state => state.loaded
);

export const selectUserDetail = createSelector(
  selectUserState,
  state => state.user
);

export const selectUsers = createSelector(
  selectUserState,
  selectAll
);

export const selectError = createSelector(
  selectUserState,
  state => state.error
);
