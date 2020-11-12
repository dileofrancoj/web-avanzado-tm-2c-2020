import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { SwalService } from './../../services/swal.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loaded: boolean = false;
  FormObject = {
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  };

  // [POST] http://localhost:3000/auth

  constructor(
    private service: LoginService,
    private swal: SwalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup(this.FormObject);
  }

  verifyField(field: string): string {
    // verifyField('usuario') -> this.form.controls['usuario']
    const element = this.form.controls[field];
    let message = '';
    element.status === 'INVALID' && element.touched
      ? (message = `El campo ${field} es obligatorio`)
      : '';
    return message;
  }

  async login() {
    try {
      const result: any = await this.service.auth(this.form.value);
      const { JWT, info } = result;

      localStorage.setItem('JWT', JWT);
      localStorage.setItem('user', JSON.stringify(info));
      this.router.navigate(['home']);
    } catch (e) {
      // mensaje -> usuario o password incorrectos
    }
  }
}
