import { Component } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: 'search.page.html',
	styleUrls: ['search.page.scss'],
})
export class SearchPage {
	public static readonly PAGES = [
    {
      path: 'media',
			display: 'Médias',
			icon: 'play-outline'
		},
    {
      path: 'users',
      display: 'Utilisateurs',
      icon: 'person-outline'
    },
	];

  public get pages() { return SearchPage.PAGES; }
}
