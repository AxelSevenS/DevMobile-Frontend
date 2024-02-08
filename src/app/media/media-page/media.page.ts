import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: 'media.page.html',
  styleUrls: ['media.page.scss'],
})
export class MediaPage {

  public get activatedRoute(): ActivatedRoute { return this._activatedRoute }

  constructor(
    private _activatedRoute: ActivatedRoute
  ) {}

}
