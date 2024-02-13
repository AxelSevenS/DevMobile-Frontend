import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Observable, catchError, of } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

export declare type AuthenticationState = 'loggedIn' | 'loggedOut' | 'disconnected';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[] | null> {
    return this.http.get<User[]>(`${environment.host}/api/users`)
      .pipe( catchError(() => {
        return of(null);
      }));
  }

  getUserById(id: number): Observable<User | null> {
    return this.http.get<User>(`${environment.host}/api/users/${id}`)
      .pipe( catchError(() => {
        return of(null);
      }));
  }

  updateUserById(id: number, user: Partial<User>): Observable<User | null> {
    let token = localStorage.getItem(AuthenticationService.storageKey);
    if ( ! token ) return of(null);

    const formData = new FormData();
    if (user.username) formData.append('username', user.username);
    if (user.password) formData.append('password', user.password);
    if (user.roles) formData.append('roles', user.roles);

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.patch<User>(`${environment.host}/api/users/${id}`, formData, {headers: headers})
      .pipe(
        catchError(() => {
          return of(null);
        })
      );
  }

}