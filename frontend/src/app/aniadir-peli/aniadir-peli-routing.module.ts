import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniadirPeliPage } from './aniadir-peli.page';

const routes: Routes = [
  {
    path: '',
    component: AniadirPeliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniadirPeliPageRoutingModule {}
