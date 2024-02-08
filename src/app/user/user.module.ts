import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';

import { UserListPage } from './user-list-page/user-list.page';
import { UserPage } from './user-page/user.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UserRoutingModule,
  ],
  declarations: [UserListPage, UserPage]
})
export class UserModule {
}
