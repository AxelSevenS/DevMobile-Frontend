import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MediaListPage } from './media-list-page/media-list.page';
import { MediaPage } from './media-page/media.page';
import { MediaComponent } from './media/media.component';
import { RouterModule } from '@angular/router';
import { NgLetModule } from 'ng-let';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgLetModule,
    FormsModule
  ],
  declarations: [MediaListPage, MediaPage, MediaComponent],
  exports: [MediaListPage, MediaPage, MediaComponent],
})
export class MediaModule {
}
