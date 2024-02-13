import { Component, OnInit } from '@angular/core';
import { Media } from '../media.model';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-media-list',
  templateUrl: 'media-list.page.html',
  styleUrls: ['media-list.page.scss'],
})
export class MediaListPage implements OnInit {

  public get medias() { return this._medias }
  private _medias?: Media[] | null;

  constructor(
    private mediaService: MediaService
  ) { }
  
  ngOnInit(): void {
    this.mediaService.getMedias()
      .subscribe(u => this._medias = u);
  }

  onInfiniteScroll(event: Event) {
  }

}
