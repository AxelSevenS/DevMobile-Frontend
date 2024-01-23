import { Component } from '@angular/core';
import { VisualReadService } from '../visual-read-service/visual-read.service';
import { BarcodeScannedEvent } from '@capacitor-mlkit/barcode-scanning';

@Component({
    selector: 'app-find',
    templateUrl: 'find.page.html',
    styleUrls: ['find.page.scss']
})
export class FindPage {

    constructor(
        private visualReader: VisualReadService
    ) {}

    ionViewDidEnter(): void {
        this.visualReader.scanAny((result: BarcodeScannedEvent) => {
            let id = this.visualReader.convertToId(result.barcode);
            if ( !(id instanceof Error) ) {
                console.log(id);
            } else {
                console.log(id);
            }
        });
    }
    
    ionViewDidLeave(): void {
        this.visualReader.stopScan();
    }


    // onFinish(result: IScanResultWithContent): void {
        
    //     if ( this.visualReader.verifyFormat(result.content) ) {
    //         console.log("VALID: " + result.content);
    //         console.log("Format: " + result.format);
    //         return;
    //     }
    //     console.log("INVALID: " + result.content);
    //     console.log("Format: " + result.format);
    // }

}
