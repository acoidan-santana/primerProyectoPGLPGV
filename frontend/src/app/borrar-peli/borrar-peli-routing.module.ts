import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrarPeliPage } from './borrar-peli.page';

const routes: Routes = [
  {
    path: '',
    component: BorrarPeliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrarPeliPageRoutingModule {}
