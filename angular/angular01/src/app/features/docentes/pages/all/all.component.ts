import { Component, OnInit } from '@angular/core';
import { Docentes, Docente } from './../../docentes';
import { DocentesService } from '../../docentes.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  docentes: Docentes;
  docente: Docente;
  constructor(private service: DocentesService) {}

  ngOnInit(): void {
    //const result = this.service.get('docentes')
    //this.docente = result;
    this.docentes = [
      {
        id: 1,
        nombre: 'franco',
        apellido: 'di leo',
        dni: '123123',
      },
    ];
  }
}
