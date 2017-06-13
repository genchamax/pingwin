/**
 * Created by LWells on 5/30/2017.
 */
import {Component, OnInit} from '@angular/core';
import {StudentLessonsListService} from "../student-lessons-list.service";
import {Word} from "../../../domain/word";

@Component({
  moduleId: module.id,
  templateUrl: './student-dictionary.component.html',
  styleUrls: ['./student-dictionary.component.css']
})

export class StudentDictionaryComponent implements OnInit {
  words: Word[];

  constructor(private studentLessonsListService: StudentLessonsListService) {
  }

  ngOnInit() {
    this.studentLessonsListService.getTopics().subscribe(topics => {
      this.words = [];
      for (let topic of topics) {
        for (let lesson of topic.lessons) {
          for (let word of lesson.words) {
            this.words.push(word);
          }
        }
      }
      console.log(this.words);
    });
  }
}

