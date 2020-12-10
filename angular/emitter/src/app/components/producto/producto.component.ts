import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  @Output()
  prop = new EventEmitter<number>();
  init: number = 0;

  constructor() {}
  add() {
    this.init++;
    this.prop.emit(this.init);
  }

  ngOnInit(): void {}
}
