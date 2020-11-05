import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CharactersService extends BaseService {
  common: string = 'character';
  all() {
    this.setEndPoint(this.common);
    return this.get();
  }
  single(id) {
    this.setEndPoint(`${this.common}/${id}`);
    return this.get();
  }
}
