import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: ()=> import("./features/login/login.routes").then(r=> r.LoginRoutes)
  }
];
