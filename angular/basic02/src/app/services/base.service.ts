import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  urlServer: string = environment.url;
  endpoint: string = '';
  // urlServer + endpoint
  // creando una instancia en http de HttpClient -> Gracias al app.module-.ts
  constructor(private http: HttpClient) {}

  // by fran
  setEndPoint(endpoint) {
    this.endpoint = endpoint;
  }

  handlerError({ status }) {
    // sendStatus(401) -> status : 401
    if (status === 401) {
      // unauthorized
    } else if (status === 500) {
      // internal server error
    }
    // location.href = 'http://http.cat/' + status;
  }
  // new Promise((resolve,reject)) => {}
  async get() {
    try {
      return await this.http
        .get(`${this.urlServer}/${this.endpoint}`)
        .toPromise();
    } catch (e) {
      this.handlerError(e);
    }
  }
  async post(body) {
    try {
      return await this.http
        .post(`${this.urlServer}/${this.endpoint}`, body)
        .toPromise();
    } catch (e) {
      this.handlerError(e);
    }
  }

  // characters
  // this.setEndpoint('characters');
  //this.get()
}
