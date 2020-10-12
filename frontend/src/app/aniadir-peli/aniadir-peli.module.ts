import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AniadirPeliPageRoutingModule } from './aniadir-peli-routing.module';

import { AniadirPeliPage } from './aniadir-peli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AniadirPeliPageRoutingModule
  ],
  declarations: [AniadirPeliPage]
})
export class AniadirPeliPageModule {}
