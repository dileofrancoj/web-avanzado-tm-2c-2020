import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocentesService } from '../../docentes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  loaded: boolean = false;
  form: FormGroup;
  selectedFile: File; // req.files
  image: boolean = false;
  previewUrl: any; // vista previa de la imagen -> <img [src]="previewUrl" />

  FormObject: any = {
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
  };

  createForm(): void {
    this.form = new FormGroup(this.FormObject);
  }

  onFileSelected(e: any) {
    console.log(e);
    const reader = new FileReader();
    const { files } = e.target;
    if (files && files.length) {
      this.selectedFile = files[0]; // selecciono el archivo
      console.log(this.selectedFile);
      reader.onload = (e) => {
        this.previewUrl = reader.result; // URL -> <img src=""
        console.log(this.previewUrl);
        this.image = true;
      };
      reader.readAsDataURL(this.selectedFile); // voy a generar una url a partir del archivo leido
    }
  }

  eliminar() {
    // limpiar el buffer del objeto File
    this.previewUrl = '';
    this.image = false;
  }

  async upload() {
    const { nombre, apellido, dni } = this.form.value;
    const fd = new FormData(); // key,value
    // this.service.create(this.form.value) // mandar el form en texto plano
    fd.append('nombre', nombre); // {nombre : 'franco'}
    fd.append('apellido', apellido); // Object.assign(fd,{nombre : 'franco'})
    fd.append('dni', dni);
    fd.append('imagen', this.selectedFile, this.selectedFile.name); // {mimetype, name, size, }
    // const result = await this.service.create(fd);
    // result contiene la respuesta del server -> id : 4
  }

  constructor(private service: DocentesService) {}

  // service(this.form.value) // Application / Json
  // new FormData();
  ngOnInit(): void {
    this.createForm();
  }
}
