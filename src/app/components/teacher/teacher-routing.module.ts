/**
 * Created by Max on 10.06.2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TeacherComponent} from "./teacher.component";
import {TeacherService} from "./teacher.service";
import {TopicOverviewComponent} from "./topic-overview/topic-overview.component";
import {ConfirmationService, ConfirmDialogModule, SharedModule, TabViewModule} from "primeng/primeng";

const teacherRoutes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      {path: 'topic/overview', component: TopicOverviewComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(teacherRoutes),
    ConfirmDialogModule,
    SharedModule,
    TabViewModule
  ],
  exports: [],
  providers: [
    TeacherService,
    ConfirmationService
  ]
})
export class TeacherRoutingModule {
}
