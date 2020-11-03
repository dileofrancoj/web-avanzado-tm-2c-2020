import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'basic01';
  nombre: string = 'Frantuko';
  apellido: string = 'Di Leo';
  edad: number = 26;
  casado: boolean = false;
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
}
