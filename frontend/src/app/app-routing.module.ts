import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'aniadir-peli',
    loadChildren: () => import('./aniadir-peli/aniadir-peli.module').then( m => m.AniadirPeliPageModule)
  },
  {
    path: 'actualizar-peli',
    loadChildren: () => import('./actualizar-peli/actualizar-peli.module').then( m => m.ActualizarPeliPageModule)
  },
  {
    path: 'borrar-peli',
    loadChildren: () => import('./borrar-peli/borrar-peli.module').then( m => m.BorrarPeliPageModule)
  },
  {
    path: 'pagina-actualizacion',
    loadChildren: () => import('./pagina-actualizacion/pagina-actualizacion.module').then( m => m.PaginaActualizacionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
