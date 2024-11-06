import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddComponent } from './components/add/add.component';
import { StatusComponent } from './components/status/status.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about/:id',
    component: AboutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'add',
        component: AddComponent,
      },
    ],
  },
  {
    path: '**',
    component: StatusComponent,
  },
];
