import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  handlerError(e) {
    if (e.status === 401) {
      // limpio el storage
      // redirigir a login
    }
  }
  constructor() {}
}
