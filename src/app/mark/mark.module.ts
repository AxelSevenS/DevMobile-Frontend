import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarkPage } from './mark.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MarkPageRoutingModule } from './mark-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MarkPageRoutingModule
  ],
  declarations: [MarkPage]
})
export class MarkPageModule {}
