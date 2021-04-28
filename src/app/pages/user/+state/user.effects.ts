import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { UserService } from './user.service';
import * as userActions from './user.actions';


@Injectable()
export class UserEffect {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.loadUserDetail),
    mergeMap(action => this.userService.getUser(action.userId).pipe(
      map(user => userActions.userDetailLoadedSuccessfully({ user })),
      catchError(error => of(userActions.loadingFailed({ reason: error })))
    ))
  ));

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.loadUsers),
    mergeMap(_ => this.userService.getUsers().pipe(
      map(users => userActions.usersLoadedSuccessfully({ users })),
      catchError(error => of(userActions.loadingFailed({ reason: error })))
    ))
  ));
}
