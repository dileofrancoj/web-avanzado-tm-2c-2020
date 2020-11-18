import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  formObject = {
    usuario: new FormControl('', [Validators.required]),
  };
  ngOnInit(): void {
    this.form = new FormGroup(this.formObject);
  }
}
