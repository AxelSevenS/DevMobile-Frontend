import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Media } from 'src/app/media/media.model';
import { MediaService } from 'src/app/media/media.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-library',
  templateUrl: 'user-library.page.html',
  styleUrls: ['user-library.page.scss'],
})
export class UserLibraryPage implements OnInit {

  public get isOwner(): boolean { return this._authentication.user?.id == this.requestId }
  public get isAdmin(): boolean { return this._authentication.user?.roles == "Admin" }
  public get requestId(): number { return this.activatedRoute.snapshot.params['id'] }

  public get user() { return this._user }
  private _user?: User | null;

  public get media() { return this._media }
  private _media?: Media[] | null;



  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private mediaService: MediaService,
    private _authentication: AuthenticationService
  ) {}
  
  ngOnInit(): void {
    this.userService.getUserById(this.requestId)
      .subscribe(user => {
        this._user = user;
      })
    this.mediaService.getMediaByAuthorId(this.requestId)
      .subscribe(media => {
        this._media = media;
      });
  }

  onInfiniteScroll(event: Event) {
  }

}
