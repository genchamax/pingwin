/**
 * Created by Max on 10.06.2017.
 */

import {Component, Input} from "@angular/core";
import {Lesson} from "../../../domain/lesson";

@Component({
  moduleId: module.id,
  selector: 'pingwin-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {
  @Input() lesson: Lesson;
}
