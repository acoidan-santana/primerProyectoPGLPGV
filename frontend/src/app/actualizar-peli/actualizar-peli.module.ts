import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarPeliPageRoutingModule } from './actualizar-peli-routing.module';

import { ActualizarPeliPage } from './actualizar-peli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarPeliPageRoutingModule
  ],
  declarations: [ActualizarPeliPage]
})
export class ActualizarPeliPageModule {}
