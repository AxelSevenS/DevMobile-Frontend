import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { MediaService } from '../media.service';
import { Media } from '../media.model';
import { AlertController } from '@ionic/angular';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media-page',
  templateUrl: 'media.page.html',
  styleUrls: ['media.page.scss'],
})
export class MediaPage {

  editMediaForm: FormGroup = this.formBuilder.group(
    {
      name: ['', Validators.required],
      description: ['', Validators.required]
    }
  );

  public get mediaService() { return this._mediaService }
  public get authentication() { return this._authentication }

  public get isOwner() { return this._authentication.user?.id == this.media?.authorId }
  public get isAdmin() { return this._authentication.user?.roles == "Admin" }
  public get requestId() { return this.activatedRoute.snapshot.params['id'] }

  public get qrCodeDownloadLink() { return this._qrCodeDownloadLink }
  private _qrCodeDownloadLink: SafeUrl = "";

  public get media() { return this._media }
  private _media?: Media | null;

  public get fileUrl() { return this._fileUrl }
  private _fileUrl: string | null = null;

  public get mimeType() { return this._mimeType }
  private _mimeType: string | null = null;



  constructor(
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _mediaService: MediaService,
    private _authentication: AuthenticationService
  ) {}
  
  ngOnInit(): void {
    this._mediaService.getMediaById(this.requestId)
      .subscribe(media => {
        this._media = media;
        if ( ! this._media ) return;

        this._fileUrl = this.mediaService.getMediaFileUrl(this._media);
        this._mimeType = this.mediaService.getMediaMimeType(this._media);

        this.editMediaForm.controls['name'].setValue(media?.name);
        this.editMediaForm.controls['description'].setValue(media?.description);
      });
  }
  
  onChangeURL(url: SafeUrl) {
    this._qrCodeDownloadLink = url;
  }

  onSubmit(): void {
    if ( ! this.media ) return;
    if ( ! this.editMediaForm.valid ) return;

    let updated: Media = this.media;
    this.media.name = this.editMediaForm.controls['name'].value;
    this.media.description = this.editMediaForm.controls['description'].value;

    this.mediaService.updateMediaById(this.media.id, updated);
  }

  async delete() {
    if( ! this.media ) return;

    this._mediaService.deleteMediaById(this.media.id)
      .subscribe(async res => {
        if (res) {
          this.router.navigate(['']);
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
