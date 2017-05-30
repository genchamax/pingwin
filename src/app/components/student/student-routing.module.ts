import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StudentComponent} from "./student.component";
import {StudentProfileComponent} from "./profile/student-profile.component";
import {StudentTraningComponent} from "./training/student-traning.component";
/**
 * Created by LWells on 29.05.2017.
 */

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
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule {
}
