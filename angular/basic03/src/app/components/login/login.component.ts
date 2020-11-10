import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  FormObject = {
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
  };

  constructor() {}

  ngOnInit(): void {
    //const obj =  http.get()
    this.form = new FormGroup(this.FormObject);
  }

  login() {
    // e.preventDefault()
    console.log('%c ohh apretaron login', 'color:purple');
    console.log(this.form);
    console.log(this.form.value);
  }
}
