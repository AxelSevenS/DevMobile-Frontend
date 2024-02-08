import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.page';
import { VisualReadService } from './visual-read-service/visual-read.service';
import { ConfigService } from './config-service/config.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './authentication/login-page/login-page';
import { RegisterPage } from './authentication/register-page/register-page';

@NgModule({
  declarations: [AppComponent, LoginPage, RegisterPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  providers: [
    Storage,
    HttpClient,
    ConfigService,
    VisualReadService,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy
    }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
