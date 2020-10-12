import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrarPeliPageRoutingModule } from './borrar-peli-routing.module';

import { BorrarPeliPage } from './borrar-peli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrarPeliPageRoutingModule
  ],
  declarations: [BorrarPeliPage]
})
export class BorrarPeliPageModule {}
