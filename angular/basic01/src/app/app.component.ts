import { Component } from '@angular/core';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  valueInput = 'buscar empleado';
  title = 'basic01';
  nombre: string = 'Frantuko';
  apellido: string = 'Di Leo';
  edad: number = 26;
  casado: boolean = false;
  message: string = '';
  lenguajes: Array<string> = ['Javascript', 'Typescript'];
  empleados: Array<{
    id: number;
    nombre: string;
    sueldo?: number;
    edad?: number;
  }> = [
    { id: 1, nombre: 'franco', sueldo: 20000, edad: 17 },
    { id: 2, nombre: 'Juan', sueldo: 22000, edad: 28 },
  ];

  handlerInput(e) {
    console.log(event);
    const { value, name } = e.target;
    console.log(`El valor del input con name: ${name} es: ${value}`);
  }
  showMessage() {
    const message = 'soy local';
    this.message = 'Aguante Java :O';
    console.log(message);
  }
}
