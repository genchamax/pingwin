import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {StudentDictionaryComponent} from "./components/student/dictionary/student-dictionary.component";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StudentRoutingModule} from "./components/student/student-routing.module";

import {AccordionModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    StudentProfileComponent,
    StudentTraningComponent,
    StudentDictionaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    StudentRoutingModule,
    AccordionModule,
    DataTableModule,
    SharedModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
