import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
          }
        ]
      },

      {
        path: 'todas',
        children: [
          {
            path: '',
            loadChildren: () => import('../todas/todas.module').then(m => m.TodasPageModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
