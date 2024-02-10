import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaListPage } from './media-list-page/media-list.page';
import { MediaPage } from './media-page/media.page';
import { MediaModule } from './media.module';

const routes: Routes = [
  {
    path: '',
    component: MediaListPage,
  },
  {
    path: ':id',
    component: MediaPage
  }
];

@NgModule({
  imports: [
    MediaModule,
    RouterModule.forChild(routes)
  ],
})
export class MediaRoutingModule {}
