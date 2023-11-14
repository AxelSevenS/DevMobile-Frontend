import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'find',
        loadChildren: () => import('../find/find.module').then(m => m.FindPageModule)
      },
      {
        path: 'mark',
        loadChildren: () => import('../mark/mark.module').then(m => m.MarkPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/find',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/find',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
