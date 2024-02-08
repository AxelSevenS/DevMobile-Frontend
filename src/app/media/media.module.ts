import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MediaRoutingModule } from './media-routing.module';

import { MediaListPage } from './media-list-page/media-list.page';
import { MediaPage } from './media-page/media.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MediaRoutingModule,
  ],
  declarations: [MediaListPage, MediaPage]
})
export class MediaModule {
}
