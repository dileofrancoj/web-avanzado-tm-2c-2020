import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})

// Noob
// `${url}/${id}`

// pro
// [url,id].join('/')
export class PipesComponent implements OnInit {
  precio: number = 1800;
  fecha: Date = new Date();
  precioDecimal: number = 1802.89;
  obj: Object = { name: 'franco', apellido: 'di leo' };
  porcentaje: number = 0.27;
  palabras: string = 'lorem ipsuma asd';
  nombre: 'franco';
  constructor() {}

  ngOnInit(): void {}
}
