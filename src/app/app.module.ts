import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AuthGuard} from './components/auth/auth.guard';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/auth/auth.component";
import {AuthenticationService} from "./components/auth/auth.service";
import {UserService} from "./components/user/user.service";
import {MockBackend} from "@angular/http/testing";
import {fakeBackendProvider} from "./components/auth/auth.helper";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
