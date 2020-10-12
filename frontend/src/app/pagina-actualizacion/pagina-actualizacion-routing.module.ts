import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaActualizacionPage } from './pagina-actualizacion.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaActualizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaActualizacionPageRoutingModule {}
