import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config-service/config.service';
import { User } from './user.model';

export declare type AuthenticationState = 'loggedIn' | 'loggedOut' | 'disconnected';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }

}