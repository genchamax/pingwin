/**
 * Created by LWells on 04.05.2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './auth.service';

@Component({
  moduleId: module.id,
  templateUrl: './auth.component.html',
  styleUrls:['./auth.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset auth status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          // auth successful
          this.router.navigate(['/']);
        } else {
          // auth failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}
