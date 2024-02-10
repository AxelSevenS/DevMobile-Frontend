import { Component } from '@angular/core';
import { ScannerService } from './scanner-service/scanner.service';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.page.html',
  styleUrls: ['app.page.scss'],
})
export class AppComponent {
  public get scanner(): ScannerService { return this._scanner; }
  public get authentication(): AuthenticationService { return this._authentication; }

  
	constructor(
		private _scanner: ScannerService,
    private _authentication: AuthenticationService
	) {}
}
