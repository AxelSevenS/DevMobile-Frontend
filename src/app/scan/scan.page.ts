import { Component } from '@angular/core';
import { VisualReadService, CameraPermission } from '../visual-read-service/visual-read.service';
import { BarcodeScannedEvent } from '@capacitor-mlkit/barcode-scanning';

@Component({
    selector: 'app-scan',
    templateUrl: 'scan.page.html',
    styleUrls: ['scan.page.scss'],
})
export class ScanPage {

	public get support(): CameraPermission {
		return this.visualReader.support;
	}

    constructor(
        private visualReader: VisualReadService
    ) {}

    ionViewDidEnter(): void {
        this.visualReader.scanAny((result: BarcodeScannedEvent) => {
            // let id = this.visualReader.convertToId(result.barcode);
            // if ( id instanceof Error ) {
            //     console.log(id);
			// 	return;
            // }
			
			// console.log(id);
        });
    }
    
    ionViewDidLeave(): void {
        this.visualReader.stopScan();
    }
}