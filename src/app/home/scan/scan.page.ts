import { Component } from '@angular/core';
import { ScannerService } from '../../scanner-service/scanner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: 'scan.page.html',
  styleUrls: ['scan.page.scss'],
})
export class ScanPage {

	public get scanner(): ScannerService {
		return this._scanner;
	}

  constructor(
    private router: Router,
    private _scanner: ScannerService
  ) {}


  ionViewDidEnter(): void {
    this._scanner.scanAny(result => {
      let id = this._scanner.convertToId(result.barcode);
      if ( id instanceof Error ) {
        console.log(id);
        return;
      }

      this.router.navigate(['/media', id]);
    });
  }

  ionViewDidLeave(): void {
    this._scanner.stopScan();
  }
}