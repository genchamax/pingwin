/**
 * Created by LWells on 04.05.2017.
 */
import {Component, OnInit} from '@angular/core';

import {User} from '../../domain/index';
import {StudentLessonsListService} from "./student-lessons-list.service";
import {Topic} from "../../domain/topic";
import {Lesson} from "../../domain/lesson";
/*import { UserService } from '../user/user.service';*/

@Component({
  moduleId: module.id,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  ngOnInit(): void {
  }
}
