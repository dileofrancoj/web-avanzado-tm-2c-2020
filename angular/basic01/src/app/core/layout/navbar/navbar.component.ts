import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  lenguajes: [] = [];
  items: Array<{ id: number; link: string; title: string }> = [
    { id: 2, link: '/home', title: 'Home' },
    { id: 1, link: '/empleados', title: 'Empleados' },
  ];
  nombre: string = 'franco';
  constructor() {
    console.log('Lo primero que se ejecuta cuando se instancia la clase :D');
    // singleton :D
    // http
  }

  ngOnInit(): void {
    // instanciar el servicio
    // usar el servicio instanciado
    // Ciclo de vida un componente
    // solicitudes http
    console.log('Me ejecuto despues');
  }
}
