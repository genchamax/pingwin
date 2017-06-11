/**
 * Created by LWells on 29.05.2017.
 */
import {Component, Input} from '@angular/core';
import {Topic} from "../../../domain/topic";
import {StudentLessonsListService} from "../student-lessons-list.service";

@Component({
  moduleId: module.id,
  templateUrl: './student-lessons-list.component.html',
  styleUrls: ['./student-lessons-list.component.css']
})

export class StudentLessonsListComponent {

  topics: Topic[];

  constructor(private studentLessonsListService: StudentLessonsListService) {
  }

  ngOnInit(): void {
    this.studentLessonsListService.getTopics().subscribe(topics => {
      this.topics = topics;
    });
  }
}
