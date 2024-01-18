import { Routes } from '@angular/router';
import { dashboardChildren } from './Components/dashboard/dashboard-children';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./Components/home/home.component').then((c) => c.HomeComponent), pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./Components/home/home.component').then((c) => c.HomeComponent),
    children: dashboardChildren
  },

];
