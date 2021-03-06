/**
 * Created by LWells on 29.05.2017.
 */
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StudentComponent} from "./student.component";
import {StudentProfileComponent} from "./profile/student-profile.component";
import {StudentTraningComponent} from "./training/student-traning.component";
import {StudentDictionaryComponent} from "./dictionary/student-dictionary.component";
import {AccordionModule, DataTableModule, SharedModule, DropdownModule, SliderModule } from 'primeng/primeng';
import {StudentLessonsListComponent} from "./lessons-list/student-lessons-list.component";
import {StudentLessonsListService} from "./student-lessons-list.service";

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
        path: 'lessons-list',
        component: StudentLessonsListComponent,
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
    AccordionModule,
    DataTableModule,
    SharedModule,
    DropdownModule,
    SliderModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    StudentLessonsListService
  ]
})
export class StudentRoutingModule {
}
