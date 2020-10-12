import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarPeliPage } from './actualizar-peli.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarPeliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarPeliPageRoutingModule {}
