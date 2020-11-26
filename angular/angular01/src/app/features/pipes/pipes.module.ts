import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';

@NgModule({
  declarations: [PipesComponent, CapitalizePipe],
  imports: [CommonModule, PipesRoutingModule],
  exports: [PipesComponent],
})
export class PipesModule {}
