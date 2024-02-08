import { Component } from '@angular/core';
import { VisualReadService } from '../../visual-read-service/visual-read.service';

@Component({
    selector: 'app-find',
    templateUrl: 'find.page.html',
    styleUrls: ['find.page.scss'],
})
export class FindPage {

	public get media() {
		return [{
			"Id":"a30a5617-6dc6-4740-a85c-49f64fc79917",
			"Author":"6616ded0-ba41-45c2-ab36-06f7381db5b7",
			"Name":"Test",
			"Description":"TestDesc",
			"Extension":".mp4"
		}]
	}
}
