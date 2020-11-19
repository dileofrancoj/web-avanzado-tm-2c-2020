import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocentesRoutingModule } from './docentes-routing.module';
import { AllComponent } from './pages/all/all.component';
import { CreateComponent } from './pages/create/create.component';
import { DocentesComponent } from './docentes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [AllComponent, CreateComponent, DocentesComponent],
  imports: [
    CommonModule,
    DocentesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
  ],
  exports: [AllComponent, CreateComponent, DocentesComponent],
})
export class DocentesModule {}
