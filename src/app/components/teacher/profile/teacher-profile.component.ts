/**
 * Created by Max on 12.06.2017.
 */

import {Component, OnInit} from "@angular/core";
import {TeacherService} from "app/components/teacher/teacher.service";
import {Lesson} from "../../../domain/lesson";
@Component({
  moduleId: module.id,
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css'],
  providers: [TeacherService]
})
export class TeacherProfileComponent implements OnInit{

  lessons: Lesson[] = [];

  constructor(private teacherService: TeacherService) {
  }

  ngOnInit(): void {
    this.teacherService.getLessons()
      .subscribe(lessons => {this.getLessonByAuthorId(lessons, 1)});
  }

  public getLessonByAuthorId(lessons: Lesson[], id: number) {
    this.lessons = this.lessons.concat(lessons.filter(lesson => lesson.author.id === id));
  }

}
