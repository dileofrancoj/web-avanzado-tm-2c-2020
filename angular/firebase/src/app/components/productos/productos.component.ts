import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  form: FormGroup;
  products: Array<{}> = [];
  FormObject = {
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    precio: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
  };

  constructor(private _service: ProductosService) {}

  createForm(): void {
    this.form = new FormGroup(this.FormObject);
  }

  verifyField(field: string) {
    const f = this.form.controls[field];

    if (f.status === 'INVALID' && f.touched) {
      if (f.hasError('required')) return `El campo ${field} es obligatorio`;
      if (f.hasError('minlength'))
        return `El campo ${field} debe tener más caracteres`;
    }
  }

  filterResult(elements: any) {
    this.products = elements.filter((element: any) => element != null);
  }

  async getProducts() {
    const result = await this._service.getall();
    return result;
  }

  async ngOnInit() {
    const products = await this.getProducts();
    this.createForm();
    this.filterResult(products);
    //console.log(this.products);
  }
}
