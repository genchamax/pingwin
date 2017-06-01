import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AuthGuard} from './components/auth/auth.guard';
import {LoginComponent} from "./components/auth/auth.component";
import {AuthenticationService} from "./components/auth/auth.service";
import {UserService} from "./components/user/user.service";
import {MockBackend} from "@angular/http/testing";
import {fakeBackendProvider} from "./components/auth/auth.helper";

/*Student*/
import {StudentComponent} from "./components/student/student.component";
import {StudentProfileComponent} from "./components/student/profile/student-profile.component";
import {StudentTraningComponent} from "./components/student/training/student-traning.component";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StudentRoutingModule} from "./components/student/student-routing.module";
import {BlogComponent} from "./components/blog/blog.component";
import {CreateArticleComponent} from "./components/blog/article/create-article.component";
import {BlogService} from "./components/blog/blog.service";
import {CKEditorComponent, CKEditorModule} from "ng2-ckeditor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    StudentProfileComponent,
    StudentTraningComponent,

    BlogComponent,
    CreateArticleComponent,

  //  Content Editor
    CKEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    StudentRoutingModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

    BlogService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
