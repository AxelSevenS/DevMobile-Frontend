import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { MediaModule } from '../media/media.module';
import { SearchPage } from './search/search.page';
import { MarkPage } from './mark/mark.page';
import { ScanPage } from './scan/scan.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    RouterLink,
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    MediaModule
  ],
  declarations: [HomePage, ScanPage, SearchPage, MarkPage]
})
export class HomeModule {
}
