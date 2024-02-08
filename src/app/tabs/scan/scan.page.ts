import { Component } from '@angular/core';
import { VisualReadService, CameraPermission } from '../../visual-read-service/visual-read.service';
import { BarcodeScannedEvent } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-scan',
  templateUrl: 'scan.page.html',
  styleUrls: ['scan.page.scss'],
})
export class ScanPage {

	public get visualReader(): VisualReadService {
		return this._visualReader;
	}

  constructor(
    private _visualReader: VisualReadService
  ) {}


  ionViewDidEnter(): void {
    this._visualReader.scanAny((result: BarcodeScannedEvent) => {
      let id = this._visualReader.convertToId(result.barcode);
      if ( id instanceof Error ) {
        console.log(id);
        return;
      }

      console.log(id);
    });
  }

  ionViewDidLeave(): void {
    this._visualReader.stopScan();
  }
}