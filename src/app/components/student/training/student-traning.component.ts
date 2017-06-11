/**
 * Created by LWells on 29.05.2017.
 */
import {Component} from '@angular/core';
import {Topic} from "../../../domain/topic";
import {StudentLessonsListService} from "../student-lessons-list.service";

@Component({
  moduleId: module.id,
  templateUrl: './student-traning.component.html',
  styleUrls: ['./student-traning.component.css']
})

export class StudentTraningComponent {

  topicsToLearn: Topic[];

  constructor(private studentLessonsListService: StudentLessonsListService) {
  }

  ngOnInit(): void {
    this.studentLessonsListService.getTopics().subscribe(topics => {
      this.topicsToLearn = topics;
    });
    for (let topicToLearn of this.topicsToLearn) {
      topicToLearn.lessons = topicToLearn.lessons.filter(
        lesson => lesson.point != null
      )
    }
  }
}
