import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistroService } from './registro.service';
import { SwalService } from 'src/app/services/swal.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  loaded: boolean = false;
  // nombre,apellido, telefono,mail, usuario, password
  constructor(private service: RegistroService, private swal: SwalService) {}
  form: FormGroup;
  FormObject: any = {
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.email]),
    telefono: new FormControl('', [Validators.required]),
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  };

  verifyField(field: string): string {
    // verifyField('usuario') -> this.form.controls['usuario']
    const element = this.form.controls[field];
    let message = '';
    element.status === 'INVALID' && element.touched
      ? (message = `El campo ${field} es obligatorio`)
      : '';
    return message;
  }
  ngOnInit(): void {
    this.form = new FormGroup(this.FormObject);
  }

  async register() {
    // this.form.value
    const result: any = await this.service.create(this.form.value);
    console.log(result);
  }
}
