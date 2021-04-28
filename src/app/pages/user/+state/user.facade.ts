import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromUser from './user.reducer';
import * as userActions from './user.actions';
import { User, UserDetail } from './models/user';
import * as userSelector from './user.selectors';


@Injectable()
export class UserFacade {
  public get user$(): Observable<UserDetail> {
    return this.store.pipe(select(userSelector.selectUserDetail));
  }

  public get loaded$(): Observable<boolean> {
    return this.store.pipe(select(userSelector.selectLoaded));
  }

  public get error$(): Observable<string> {
    return this.store.pipe(select(userSelector.selectError));
  }

  public get users$(): Observable<User[]> {
    return this.store.pipe(select(userSelector.selectUsers));
  }

  constructor(private store: Store<fromUser.UserPartialState>) { }

  loadUsers(): void {
    this.store.dispatch(userActions.loadUsers());
  }

  loadUserDetail(userId: number): void {
    this.store.dispatch(userActions.loadUserDetail({ userId }));
  }
}
