import { Injectable, OnInit } from '@angular/core';
import { Barcode, BarcodeScannedEvent, BarcodeScanner, CameraPermissionState } from '@capacitor-mlkit/barcode-scanning';

@Injectable({
    providedIn: 'root'
})
export class VisualReadService implements OnInit {

    support: CameraPermissionState | 'unsupported' = 'unsupported';

    ngOnInit(): void {
        this.verifySupport();
    }

    private async verifySupport(): Promise<void> {
        BarcodeScanner.isSupported().then((result) => {
            this.support = result.supported ? 'prompt' : 'unsupported';
        });
        if ( this.support === 'unsupported' ) {
            return;
        }

        this.support = (await BarcodeScanner.requestPermissions()).camera;
        if ( this.support === 'denied' ) {
            return;
        }
    }



    convertToId = (content: Barcode): string | Error => {
        if ( content.rawValue.startsWith('krdt://') ) {
            return content.rawValue.substring(7);
        }

        return new Error("kredit code invalid")
    }

    scanOnce = async (): Promise<Barcode | null> => {
        if ( this.support === 'unsupported' || this.support === 'denied' ) {
            return null;
        }

        return new Promise(async resolve => {
            const listener = await BarcodeScanner.addListener(
                'barcodeScanned',
                async result => {
                    await listener.remove();
                    await BarcodeScanner.stopScan();
                    resolve(result.barcode);
                },
            );

            await BarcodeScanner.startScan();
        });
    }

    scanAny = async (onScanned: (event: BarcodeScannedEvent) => void): Promise<void> => {
        if ( this.support === 'unsupported' || this.support === 'denied' ) {
            return;
        }

        const listener = await BarcodeScanner.addListener(
            'barcodeScanned',
            onScanned
        );

        await BarcodeScanner.startScan();
    }

    stopScan = async (): Promise<void> => {
        await BarcodeScanner.removeAllListeners();
        await BarcodeScanner.stopScan();
    }

}