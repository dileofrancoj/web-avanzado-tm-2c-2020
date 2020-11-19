import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class DocentesService extends BaseService {
  create(obj: Object) {
    // this.setEndpoint('docentes')
    // return this.http.post(obj)
  }
}
