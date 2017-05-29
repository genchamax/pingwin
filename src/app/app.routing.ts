/**
 * Created by LWells on 04.05.2017.
 */
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './components/auth/auth.component';
import {StudentComponent} from './components/student/student.component';
import {AuthGuard} from "./components/auth/auth.guard";
import {StudentProfile} from "./components/student/profile/student-profile.component";
import {StudentTraning} from "./components/student/training/student-traning.component";

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'student', component: StudentComponent
  },
  {path: '**', redirectTo: 'student'}
];

export const routing = RouterModule.forRoot(appRoutes);
