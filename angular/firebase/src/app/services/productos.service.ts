import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Producto } from './../interfaces/productos';
@Injectable({
  providedIn: 'root',
})
export class ProductosService extends BaseService {
  getall() {
    this.setEndPoint('productos');
    return this.get();
  }

  create(producto: Producto) {
    const obj = {
      nombre: producto.nombre,
      stock: producto.stock,
      foto: producto.stock,
      precio: producto.precio,
    };
    this.setEndPoint('productos');
    this.post(obj);
  }
}
