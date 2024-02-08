import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: 'user.page.html',
  styleUrls: ['user.page.scss'],
})
export class UserPage {

  public get activatedRoute(): ActivatedRoute { return this._activatedRoute }

  constructor(
    private _activatedRoute: ActivatedRoute
  ) {}

}
