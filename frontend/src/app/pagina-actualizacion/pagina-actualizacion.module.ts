import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaActualizacionPageRoutingModule } from './pagina-actualizacion-routing.module';

import { PaginaActualizacionPage } from './pagina-actualizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PaginaActualizacionPageRoutingModule
  ],
  declarations: [PaginaActualizacionPage]
})
export class PaginaActualizacionPageModule {}
