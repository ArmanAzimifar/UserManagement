import { createAction, props } from '@ngrx/store';

import { User, UserDetail } from './models/user';



const space = '[user] ';

export const loadUserDetail = createAction(
  space + 'Load User Detail',
  props<{ userId: number }>()
);
export const userDetailLoadedSuccessfully = createAction(
  space + 'User Detail Loaded Successfully',
  props<{ user: UserDetail }>()
);

export const loadUsers = createAction(
  space + 'Load Users'
);
export const usersLoadedSuccessfully = createAction(
  space + 'User Loaded Successfully',
  props<{ users: User[] }>()
);

export const loadingFailed = createAction(
  space + 'loading Failed',
  props<{ reason: string }>()
);
