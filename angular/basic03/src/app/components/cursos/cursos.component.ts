import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  loaded: boolean = false;
  cursos: Array<Object> = [];
  constructor(private _service: CursosService) {}

  // traer todos los cursos
  async ngOnInit() {
    this.loadCursos();
    this.loaded = !this.loaded;
  }

  async loadCursos() {
    const cursos: any = await this._service.all();
    console.log(cursos);
    this.cursos = cursos;
  }
}
