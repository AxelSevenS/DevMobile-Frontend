import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindPage as FindPage } from './find.page';

const routes: Routes = [
  {
    path: '',
    component: FindPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindPageRoutingModule {}
