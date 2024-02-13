import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPage } from './search.page';
import { MediaListPage } from 'src/app/media/media-list-page/media-list.page';
import { UserListPage } from 'src/app/user/user-list-page/user-list.page';
import { MediaModule } from 'src/app/media/media.module';
import { UserModule } from 'src/app/user/user.module';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
    children: [
      {
        path: '',
        redirectTo: 'media',
        pathMatch: 'full'
      },
      {
        path: 'media',
        component: MediaListPage
      },
      {
        path: 'users',
        component: UserListPage
      },
    ]
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    MediaModule,
    UserModule,
    RouterModule.forChild(routes)
  ],
})
export class SearchRoutingModule {}
