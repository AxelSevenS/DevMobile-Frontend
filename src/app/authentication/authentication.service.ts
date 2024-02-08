import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config-service/config.service';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { User } from '../user/user.model';
import { Router } from '@angular/router';

export declare type LoginState = 'loggedIn' | 'loggedOut' | 'disconnected';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private static readonly storageKey: string = "JWT";

  private _state: LoginState = 'loggedOut';
  public get state() : LoginState {
    return this._state;
  }

  private _user: User | null = null;
  public get user() : User | null {
    return this._user;
  }

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private router: Router
  ) {
    this._state = 'loggedOut';

    let jwt = localStorage.getItem(AuthenticationService.storageKey);
    if (jwt === null) return;
    
    let user = this.jwtToUser(jwt);
    if (user === null) return;

    this._user = user;
    this._state = 'loggedIn';
  }

  login(username: string, password: string): Observable<User | null> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    let res = this.http.post<string | HttpErrorResponse>(`${this.config.host}/users/auth/`, formData, {headers: headers})
      .pipe( 
        map(res => {
          if (res instanceof HttpErrorResponse) {
            return null;
          }

          this._user = this.jwtToUser(res);
          if (this._user !== null) {
            localStorage.setItem(AuthenticationService.storageKey, res)
          }

          this._state = 'loggedIn';
          return this._user;
        }), 
        catchError(err => {
          this._user = null;
          if (err instanceof HttpErrorResponse) {
            this._state = err.error == 0 ? 'disconnected' : 'loggedOut';
          }
          return of(this._user);
        })
      );

    return res;
  }

  logout(): void {
    this._user = null;
    this._state = 'loggedOut';
    localStorage.removeItem(AuthenticationService.storageKey);
    this.router.navigate(['']);
  }

  private jwtToUser(token: string): User | null {
    let decoded = jwtDecode<UserPayload>(token);
    if ( ! decoded.sub || ! decoded.name || ! decoded.roles || ! decoded.exp || decoded.exp >= Date.now())
      return null;

    return {
      id: parseInt(decoded.sub),
      username: decoded.name,
      role: decoded.roles,
    }
  }
}


interface UserPayload extends JwtPayload {
  sub: string,
  name: string,
  roles: "Admin" | "Client"
}