import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public get host() {
    return 'http://localhost:5001';
  }

  constructor() {

  }
}
