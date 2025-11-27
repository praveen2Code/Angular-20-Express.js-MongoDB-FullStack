import { Routes } from '@angular/router';
import { UserListComponent } from './user-list-component/user-list-component';
import { UserFormComponent } from './user-form-component/user-form-component';
import { UserDetailComponent } from './user-detail-component/user-detail-component';

export const USER_ROUTES: Routes = [
  { path: '', component: UserListComponent },
  { path: 'new', component: UserFormComponent },
  { path: 'edit/:id', component: UserFormComponent },
  { path: ':id', component: UserDetailComponent }
];