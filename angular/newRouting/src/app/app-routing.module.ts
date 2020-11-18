import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importar un archivo de forma asincronica
const homeModule = () =>
  import('./features/home/home.module').then((m) => m.HomeModule);

const accountModule = () =>
  import('./features/account/account.module').then((m) => m.AccountModule);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: homeModule,
  },
  {
    path: 'account',
    loadChildren: accountModule,
    data: { showHeader: false, showFooter: false },
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
