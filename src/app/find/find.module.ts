import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FindPage } from './find.page';

import { FindPageRoutingModule } from './find-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FindPageRoutingModule
  ],
  declarations: [FindPage]
})
export class FindPageModule {}
