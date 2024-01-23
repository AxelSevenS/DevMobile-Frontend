import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { VisualReadService } from './visual-read-service/visual-read.service';

@NgModule({
    declarations: [AppComponent, UserComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        VisualReadService,    
        { 
            provide: RouteReuseStrategy, 
            useClass: IonicRouteStrategy
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
