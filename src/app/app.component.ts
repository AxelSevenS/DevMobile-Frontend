import { Component } from '@angular/core';
import { VisualReadService } from './visual-read-service/visual-read.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
	public get isScanning(): boolean {
		return this.visualReader.isActive;
	}
	constructor(
		private visualReader: VisualReadService
	) {}
}
