/**
 * Created by Max on 10.06.2017.
 */

import {Component, OnInit} from "@angular/core";
import {Topic} from "../../../domain/topic";
import {TeacherService} from "../teacher.service";
import {Lesson} from "../../../domain/lesson";
import {Word} from "../../../domain/word";
import {ConfirmationService, Message} from "primeng/primeng";

@Component({
  moduleId: module.id,
  templateUrl: './topic-overview.component.html',
  styleUrls: ['./topic-overview.component.css'],
  providers: [ConfirmationService]
})

export class TopicOverviewComponent implements OnInit {
  private teacherService: TeacherService;

  topics: Topic[] = [];
  lessons: Lesson[] = [];
  words: Word[] = [];
  msgs: Message[] = [];

  constructor(teacherService: TeacherService, private confirmationService: ConfirmationService) {
    this.teacherService = teacherService;
  }

  public deleteWord(word: Word){
    this.confirmationService.confirm({
      message: 'Ви бажаєте видалити слово ' + word.name + ' ?',
      header: 'Видалення слова',
      icon: 'fa fa-trash',
      accept: () => {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Видалено', detail: 'Слово ' + word.name + ' видалено'});
      }
    })
  }


  ngOnInit(): void {
    this.teacherService.getTopic()
      .subscribe(topics => {
        console.log(topics);
        this.topics = topics;

        this.getAllLessons(this.topics);

        this.getAllWords(this.lessons);
      });
  }

  private getAllLessons(topics: Topic[]) {
    for (let topic of topics) {
      this.lessons = this.lessons.concat(topic.lessons);
    }
  }

  private getAllWords(lessons: Lesson[]) {
    for (let lesson of lessons) {
      this.words = this.words.concat(lesson.words);
    }
  }

}
