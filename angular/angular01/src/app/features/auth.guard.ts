// ng g g auth ->
// ngBootstrap
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}
  canLoad(): boolean {
    let status = false;
    localStorage.getItem('JWT') // localStoraget.setItem('JWT',jwt)
      ? (status = true)
      : this.router.navigate(['pipes']);
    return status;
  }
}

// this.router.navigate(['pipes'])
