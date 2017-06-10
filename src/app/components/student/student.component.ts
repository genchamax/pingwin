/**
 * Created by LWells on 04.05.2017.
 */
import { Component, OnInit } from '@angular/core';

import { User } from '../../domain/index';
/*import { UserService } from '../user/user.service';*/

@Component({
  moduleId: module.id,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  users: User[] = [];

  constructor() { }

  ngOnInit() {
    // get users from secure api end point
/*    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });*/
  }


}
