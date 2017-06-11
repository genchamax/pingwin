import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BaseRequestOptions, HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {routing} from "./app.routing";

import {LoginComponent} from "./components/auth/auth.component";
import {StudentComponent} from "./components/student/student.component";
import {StudentProfileComponent} from "./components/student/profile/student-profile.component";
import {StudentTraningComponent} from "./components/student/training/student-traning.component";
import {StudentDictionaryComponent} from "./components/student/dictionary/student-dictionary.component";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {StudentRoutingModule} from "./components/student/student-routing.module";
import {BlogComponent} from "./components/blog/blog.component";
import {CreateArticleComponent} from "./components/blog/article/create-article.component";
import {BlogService} from "./components/blog/blog.service";
import {CKEditorModule} from "ng2-ckeditor";
import {ArticlePreviewComponent} from "./components/blog/article-preview/article-preview.component";

import {AccordionModule, DataTableModule, SharedModule} from "primeng/primeng";
import {CarService} from "./components/student/dictionary/student-dictionary.service";
import {TeacherComponent} from "./components/teacher/teacher.component";
import {TeacherService} from "./components/teacher/teacher.service";
import {TeacherRoutingModule} from "./components/teacher/teacher-routing.module";
import {WordComponent} from "./components/teacher/word/word.component";
import {LessonComponent} from "./components/teacher/lesson/lesson.component";
import {TopicComponent} from "./components/teacher/topic/topic.component";
import {TopicOverviewComponent} from "./components/teacher/topic-overview/topic-overview.component";
import {StudentLessonsListComponent} from "./components/student/lessons-list/student-lessons-list.component";
import {StudentLessonsListService} from "./components/student/student-lessons-list.service";

/*import {AuthGuard} from './components/auth/auth.guard';
 import {AuthenticationService} from "./components/auth/auth.service";
 import {UserService} from "./components/user/user.service";
 import {MockBackend} from "@angular/http/testing";
 import {fakeBackendProvider} from "./components/auth/auth.helper";*/
/*Student*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    StudentProfileComponent,
    StudentTraningComponent,
    StudentDictionaryComponent,
    StudentLessonsListComponent,

    BlogComponent,
    CreateArticleComponent,
    ArticlePreviewComponent,

    TeacherComponent,
    TopicOverviewComponent,
    WordComponent,
    LessonComponent,
    TopicComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),

    StudentRoutingModule,
    TeacherRoutingModule,

    AccordionModule,
    DataTableModule,
    SharedModule,
    CKEditorModule,
    routing
  ],
  providers: [
    //AuthGuard,
    //AuthenticationService,
    //UserService,
    CarService,
    BlogService,
    // providers used to create fake backend
    //fakeBackendProvider,
    //MockBackend,
    BaseRequestOptions,
    TeacherService,
    StudentLessonsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
