import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkPage as MarkPage } from './mark.page';

const routes: Routes = [
  {
    path: '',
    component: MarkPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkPageRoutingModule {}
