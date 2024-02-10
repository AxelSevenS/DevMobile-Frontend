import { Component, Input, OnInit, numberAttribute } from '@angular/core';
import { MediaService } from '../media.service';
import { Media } from '../media.model';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {

  @Input({alias: 'media'}) public media?: Media | null;

  @Input({alias: 'media-id', transform: numberAttribute}) public id?: number;

  public get authentication() { return this._authentication }

  public get fileUrl() { return this._fileUrl }
  private _fileUrl: string | null = null;

  public get mimeType() { return this._mimeType }
  private _mimeType: string | null = null;

  constructor(
    private _authentication: AuthenticationService,
    private mediaService: MediaService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    if (this.id && ! this.media) {
      this.mediaService.getMediaById(this.id)
        .subscribe(media => {
          this.media = media;
          this.updateMediaData();
        })
    } else if (! this.id && this.media) {
      this.id = this.media.id;
      this.updateMediaData();
    }
  }

  private updateMediaData() {
    this._fileUrl = this.media ? this.mediaService.getMediaFileUrl(this.media) : null;
    this._mimeType = this.media ? this.mediaService.getMediaMimeType(this.media) : null;
  }

  async delete() {
    if( ! this.media ) return;

    this.mediaService.deleteMediaById(this.media.id)
      .subscribe(async res => {
        if (res) {
          this.media = undefined;
          return;
        }

        const alert = await this.alertController.create({
          header: 'Erreur lors de la Suppression du Média',
          message: 'La suppression du Média a échoué',
          buttons: ['Ok'],
        });
    
        await alert.present();
      });
  }

}