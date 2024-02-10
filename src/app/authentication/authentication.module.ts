import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPage } from './login-page/login-page';
import { RegisterPage } from './register-page/register-page';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../config-service/config.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  providers: [
    ConfigService,
    AuthenticationService,
  ],
  declarations: [LoginPage, RegisterPage],
  exports: [LoginPage, RegisterPage]
})
export class AuthenticationModule {
}
