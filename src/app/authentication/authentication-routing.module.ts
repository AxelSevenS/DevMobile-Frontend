import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { RegisterPage } from './register-page/register-page';
import { AuthenticationModule } from './authentication.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'register',
    component: RegisterPage
  },
];

@NgModule({
  imports: [
    AuthenticationModule,
    RouterModule.forChild(routes)
  ],
})
export class AuthenticationRoutingModule {}
