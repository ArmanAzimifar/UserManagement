import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserFacade } from './+state/user.facade';
import * as fromUser from './+state/user.reducer';
import { UserEffect } from './+state/user.effects';
import { UserService } from './+state/user.service';
import { UserRoutingModule } from './user-routing.module';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { UserDetailComponent, UserListComponent } from './components';




@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DemoNgZorroAntdModule,
    StoreModule.forFeature(
      fromUser.USER_KEY,
      fromUser.reducer
    ),
    EffectsModule.forFeature([UserEffect])
  ],
  providers: [
    UserService,
    UserFacade
  ]
})
export class UserModule { }
