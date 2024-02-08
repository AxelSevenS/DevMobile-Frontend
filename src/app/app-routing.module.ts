import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './authentication/login-page/login-page';
import { RegisterPage } from './authentication/register-page/register-page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then(m => m.MediaModule),
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'register',
    component: RegisterPage,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [
    // ActivatedRoute
  ]
})
export class AppRoutingModule {}
