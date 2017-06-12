/**
 * Created by LWells on 29.05.2017.
 */
import {Component} from '@angular/core';
import {Topic} from "../../../domain/topic";
import {StudentLessonsListService} from "../student-lessons-list.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Lesson} from "../../../domain/lesson";

@Component({
  moduleId: module.id,
  templateUrl: './student-traning.component.html',
  styleUrls: ['./student-traning.component.css']
})

export class StudentTraningComponent {

  topicsToLearn: Topic[];
  closeResult: string;
  pickedLesson: Lesson;

  constructor(private modalService: NgbModal,private studentLessonsListService: StudentLessonsListService) {
  }

  ngOnInit(): void {
    this.studentLessonsListService.getTopics().subscribe(topics => {
      this.topicsToLearn = topics;
      for (let topicToLearn of this.topicsToLearn) {
        topicToLearn.lessons = topicToLearn.lessons.filter(
          lesson => lesson.point != null
        )
      }
    });
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  initPickedLesson(lesson) {
    this.pickedLesson = lesson;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
