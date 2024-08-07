import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Media } from './media.model';
import { AuthenticationService } from '../authentication/authentication.service';
import mime from 'mime';

export declare type AuthenticationState = 'loggedIn' | 'loggedOut' | 'disconnected';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private authentication: AuthenticationService,
    private http: HttpClient
  ) { }

  getMediaMimeType(media: Media): string {    
    return mime.getType(media.extension ?? '') ?? '';
  }

  getMediaFileUrl(media: Media): string {
    return `${environment.host}/Resources/Media/${media.id}.${media.extension}`;
  }

  getMedias(): Observable<Media[] | null> {
    return this.http.get<Media[]>(`${environment.host}/api/media`)
      .pipe( catchError(() => {
        return of(null);
      }));
  }

  getMediaById(id: number): Observable<Media | null> {
    return this.http.get<Media>(`${environment.host}/api/media/${id}`)
      .pipe( catchError(() => {
        return of(null);
      }));
  }

  getMediaByAuthorId(id: number): Observable<Media[] | null> {
    return this.http.get<Media[]>(`${environment.host}/api/media/byAuthor/${id}`)
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

    return this.http.put<Media>(`${environment.host}/api/media`, formData, {headers: headers})
      .pipe( catchError(e => {
        return of(null);
      }));
  }

  updateMediaById(id: number, media: Partial<Media>): Observable<Media | null> {
    let token = localStorage.getItem(AuthenticationService.storageKey);
    if ( ! token ) return of(null);

    const formData = new FormData();
    if (media.authorId != undefined) formData.append('authorId', media.authorId.toString());
    if (media.name != undefined) formData.append('name', media.name);
    if (media.description != undefined) formData.append('description', media.description);
    
    console.log(formData);

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.patch<Media>(`${environment.host}/api/media/${id}`, formData, {headers: headers})
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

    return this.http.delete<Media>(`${environment.host}/api/media/${id}`, {headers: headers})
      .pipe(
        catchError(() => {
          return of(null);
        })
      );
  }

}