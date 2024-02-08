import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public static readonly PAGES = [
    {
      path: 'scan',
      display: 'Scan',
      icon: 'scan-outline'
    },
    {
      path: 'find',
      display: 'Find',
      icon: 'search-circle-outline'
    },
    {
      path: 'mark',
      display: 'Mark',
      icon: 'pencil-outline'
    }
  ];

  public get pages() { return TabsPage.PAGES; }
  public get authentication(): AuthenticationService { return this._authentication; }



  constructor(
    private _authentication: AuthenticationService,
  ) {}

}
