import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../+state/models/user';
import { UserFacade } from '../../+state/user.facade';
import { UserService } from '../../+state/user.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]> = this._userFacade.users$;
  loaded$: Observable<boolean> = this._userFacade.loaded$;

  constructor(
    private _userFacade: UserFacade
  ) { }

  ngOnInit(): void {
    this._userFacade.loadUsers();
  }

}
