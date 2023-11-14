import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {


  public static readonly PAGES = {
    "find": {
      path: 'find',
      display: 'Find'
    },
    "mark": {
      path: 'mark',
      display: 'Mark'
    }
  };

  public get pages() { return TabsPage.PAGES; }

  public get findPage() { return TabsPage.PAGES.find; }
  public get markPage() { return TabsPage.PAGES.mark; }


  constructor() {}

}
