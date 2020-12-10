import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'emitter';
  itemsCarrito: number = 0;

  valorCarrito(e: any) {
    console.log(e);
    this.itemsCarrito = e;
  }
}
