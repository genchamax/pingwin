import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StudentComponent} from "./student.component";
import {StudentProfileComponent} from "./profile/student-profile.component";
import {StudentTraningComponent} from "./training/student-traning.component";
import {StudentDictionaryComponent} from "./dictionary/student-dictionary.component";
/**
 * Created by LWells on 29.05.2017.
 */

import {AccordionModule, DataTableModule, DropdownModule, SliderModule } from 'primeng/primeng';
import {CarService} from "./dictionary/student-dictionary.service";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";

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
    AccordionModule,
    DataTableModule,
    DropdownModule,
    SliderModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CarService
  ]
})
export class StudentRoutingModule {
}
