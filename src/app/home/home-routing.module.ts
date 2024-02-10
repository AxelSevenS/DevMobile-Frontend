import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ScanPage } from './scan/scan.page';
import { SearchPage } from './search/search.page';
import { MarkPage } from './mark/mark.page';
import { HomeModule } from './home.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'scan',
        pathMatch: 'full'
      },
      {
        path: 'scan',
        component: ScanPage
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search-routing.module').then(m => m.SearchRoutingModule),
      },
      {
        path: 'mark',
        component: MarkPage
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forChild(routes)
  ],
})
export class HomeRoutingModule {}
