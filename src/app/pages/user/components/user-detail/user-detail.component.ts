import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserService } from '../../+state/user.service';
import { UserDetail } from '../../+state/models/user';
import { UserFacade } from '../../+state/user.facade';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  id: number;
  user$:Observable<UserDetail> = this._userFacade.user$;

  private ngDestroy$ = new Subject();
  constructor(
    private _userService: UserService,
    private _userFacade: UserFacade,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.pipe(
      takeUntil(this.ngDestroy$)
    ).subscribe(params => this.id = +params['id']);
  }

  ngOnInit(): void {
    this._userFacade.loadUserDetail(this.id);
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
