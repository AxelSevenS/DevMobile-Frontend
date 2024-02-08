import { Component } from '@angular/core';
import { VisualReadService } from './visual-read-service/visual-read.service';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.page.html',
  styleUrls: ['app.page.scss'],
})
export class AppComponent {
  public get visualReader(): VisualReadService { return this._visualReader; }
  public get authentication(): AuthenticationService { return this._authentication; }

  
	constructor(
		private _visualReader: VisualReadService,
    private _authentication: AuthenticationService
	) {}
}
