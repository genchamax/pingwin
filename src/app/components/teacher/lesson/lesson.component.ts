/**
 * Created by Max on 10.06.2017.
 */

import {Component, Input} from "@angular/core";
import {Lesson} from "../../../domain/lesson";
import {ConfirmationService, Message} from "primeng/primeng";

@Component({
  moduleId: module.id,
  selector: 'pingwin-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  providers: [ConfirmationService]
})
export class LessonComponent {
  @Input() lesson: Lesson;
  msgs: Message[] = [];

  constructor(private confirmationService: ConfirmationService) {
  }

  public deleteLesson() {
    this.confirmationService.confirm({
      message: 'Ви бажаєте видалити урок ' + this.lesson.name + ' ?',
      header: 'Видалення уроку',
      icon: 'fa fa-trash',
      accept: () => {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Видалено', detail: 'Урок ' + this.lesson.name + ' видалено'});
      }
    })
  }

}
