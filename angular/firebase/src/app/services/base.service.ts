import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  url: string = 'https://pwa-2c-tm.firebaseio.com/';
  endpoint: string = '';
  setEndPoint(endpoint: string): string {
    this.endpoint = `${this.url}${endpoint}.json`;
    return this.endpoint;
  }
  constructor(private http: HttpClient) {}

  async get() {
    try {
      console.log(this.endpoint);
      return await this.http.get(this.endpoint).toPromise();
    } catch (e) {
      console.error(e);
    }
  }

  async post(obj) {
    try {
      return await this.http.post(this.endpoint, obj).toPromise();
    } catch (e) {
      console.error(e);
    }
  }
}
