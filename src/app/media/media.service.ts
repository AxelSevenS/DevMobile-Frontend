import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config-service/config.service';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { Media } from './media.model';

export declare type AuthenticationState = 'loggedIn' | 'loggedOut' | 'disconnected';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }

}