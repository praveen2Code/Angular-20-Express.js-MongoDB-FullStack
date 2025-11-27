import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing-module';
import { UserDetailComponent } from './user-detail-component/user-detail-component';
import { UserFormComponent } from './user-form-component/user-form-component';
import { UserListComponent } from './user-list-component/user-list-component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UserListComponent,
    UserFormComponent,
    UserDetailComponent
  ]
})
export class UsersModule { }
