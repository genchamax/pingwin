/**
 * Created by LWells on 04.05.2017.
 */
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import {AuthGuard} from "./components/auth/auth.guard";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
