import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StudentComponent} from "./student.component";
import {StudentProfile} from "./profile/student-profile.component";
import {StudentTraning} from "./training/student-traning.component";
/**
 * Created by LWells on 29.05.2017.
 */

const studentRoutes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: 'profile',
        component: StudentProfile,
      },
      {
        path: 'traning',
        component: StudentTraning,
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
