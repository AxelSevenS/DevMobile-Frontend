import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config-service/config.service';
import { Media } from './media.model';
import { AuthenticationService } from '../authentication/authentication.service';
import mime from 'mime';

export declare type AuthenticationState = 'loggedIn' | 'loggedOut' | 'disconnected';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private config: ConfigService,
    private authentication: AuthenticationService,
    private http: HttpClient
  ) { }

  getMediaMimeType(media: Media): string {    
    return mime.getType(media.extension ?? '') ?? '';
  }

  getMediaFileUrl(media: Media): string {
    return `${this.config.host}/Resources/Media/${media.id}.${media.extension}`;
  }

  getMedias(): Observable<Media[]> {
    return this.http.get<Media[]>(`${this.config.host}/api/media`)
      .pipe( catchError(err => {
        return [];
      }));
  }

  getMediaById(id: number): Observable<Media | null> {
    return this.http.get<Media>(`${this.config.host}/api/media/${id}`)
      .pipe( catchError(() => {
        return of(null);
      }));
  }

  getMediaByAuthorId(id: number): Observable<Media[] | null> {
    return this.http.get<Media[]>(`${this.config.host}/api/media/byAuthor/${id}`)
      .pipe( catchError(() => {
        return of(null);
      }));
  }

  createMedia(name: string, description: string, file: Blob): Observable<Media | null> {
    let token = localStorage.getItem(AuthenticationService.storageKey);
    if ( ! token ) return of(null);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('file', file);

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`, 'enctype': 'multipart/form-data' });

    return this.http.put<Media>(`${this.config.host}/api/media`, formData, {headers: headers})
      .pipe( catchError(e => {
        return of(null);
      }));
  }

  updateMediaById(id: number, media: Media): Observable<Media | null> {
    let token = localStorage.getItem(AuthenticationService.storageKey);
    if ( ! token ) return of(null);

    const formData = new FormData();
    formData.append('name', media.name);
    formData.append('description', media.description);

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.put<Media>(`${this.config.host}/api/media/${id}`, formData, {headers: headers})
      .pipe(
        catchError(() => {
          return of(null);
        })
      );
  }

  deleteMediaById(id: number): Observable<Media | null> {
    let token = localStorage.getItem(AuthenticationService.storageKey);
    if ( ! token ) return of(null);

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.delete<Media>(`${this.config.host}/api/media/${id}`, {headers: headers})
      .pipe(
        catchError(() => {
          return of(null);
        })
      );
  }

}