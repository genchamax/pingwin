import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StudentComponent} from "./student.component";
import {StudentProfileComponent} from "./profile/student-profile.component";
import {StudentTraningComponent} from "./training/student-traning.component";
import {StudentDictionaryComponent} from "./dictionary/student-dictionary.component";
/**
 * Created by LWells on 29.05.2017.
 */

import {AccordionModule} from 'primeng/primeng';

const studentRoutes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'profile' },
      {
        path: 'profile',
        component: StudentProfileComponent,
      },
      {
        path: 'traning',
        component: StudentTraningComponent,
      },
      {
        path: 'dictionary',
        component: StudentDictionaryComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes),
    AccordionModule
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule {
}
