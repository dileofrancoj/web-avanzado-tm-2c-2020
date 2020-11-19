import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  loaded: boolean = false;
  form: FormGroup;
  selectedFile: File; // req.files
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
    const reader = new FileReader();
    const { files } = e.target;
    if (files && files.length) {
      this.selectedFile = files[0]; // selecciono el archivo
      console.log(this.selectedFile);
      reader.onload = (e) => {
        // onload ->
        this.previewUrl = reader.result; // URL -> <img src=""
        console.log(this.previewUrl);
      };
      reader.readAsDataURL(this.selectedFile); // voy a generar una url a partir del archivo leido
    }
  }

  constructor() {}

  // service(this.form.value) // Application / Json
  // new FormData();
  ngOnInit(): void {
    this.createForm();
  }
}
