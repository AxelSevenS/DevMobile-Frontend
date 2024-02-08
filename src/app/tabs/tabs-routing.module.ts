import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'scan',
        pathMatch: 'full'
      },
      {
        path: 'scan',
        loadChildren: () => import('./scan/scan.module').then(m => m.ScanPageModule)
      },
      {
        path: 'find',
        loadChildren: () => import('./find/find.module').then(m => m.FindPageModule)
      },
      {
        path: 'mark',
        loadChildren: () => import('./mark/mark.module').then(m => m.MarkPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
