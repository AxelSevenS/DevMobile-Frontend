import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPage } from './user-list-page/user-list.page';
import { UserPage } from './user-page/user.page';

const routes: Routes = [
  {
    path: '',
    component: UserListPage,
  },
  {
    path: ':id',
    component: UserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UserRoutingModule {}
