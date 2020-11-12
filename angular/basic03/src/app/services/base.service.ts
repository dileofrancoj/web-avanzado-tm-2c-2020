import { Injectable } from '@angular/core';
// HttpClient
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
// Router redirecciones, ActivatedRoute -> params
export class BaseService {
  urlServer: string = environment.url;
  // get , post, headers
  // location.href = "/"
  endpoint = '';
  constructor(private http: HttpClient, private router: Router) {}

  // SEO
  setEndPoint(endpoint: string) {
    this.endpoint = endpoint;
  }

  private getHttpOptions() {
    const httpOptions = {};
    const token = localStorage.getItem('JWT'); //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjA1MTg1MTU4LCJleHAiOjE2MDUxOTIzNTh9.Jsjgbq-DntseYRXB-hHTclKZuIbpJWweRQN0brILrKM
    token
      ? (httpOptions['headers'] = new HttpHeaders({
          Authorization: token,
        }))
      : null;

    return httpOptions;
  }

  async get() {
    // return await this.http.get(url).toPromise()
    try {
      return await this.http
        .get(`${this.urlServer}/${this.endpoint}`, this.getHttpOptions())
        .toPromise();
    } catch (e) {
      this.handlerError(e);
    }
  }
  async post(obj: any) {
    // return await this.http.get(url).toPromise()
    try {
      return await this.http
        .post(`${this.urlServer}/${this.endpoint}`, obj, this.getHttpOptions())
        .toPromise();
    } catch (e) {
      this.handlerError(e);
    }
  }
  async put(obj: any) {
    // return await this.http.get(url).toPromise()
    try {
      return await this.http
        .put(`${this.urlServer}/${this.endpoint}`, obj, this.getHttpOptions())
        .toPromise();
    } catch (e) {
      this.handlerError(e);
    }
  }
  // PUT -> ()

  handlerError(e) {
    e.status === 401 ? this.router.navigate(['login']) : null;
    e.status === 404 ? this.router.navigate(['notfound']) : null;
  }
}
