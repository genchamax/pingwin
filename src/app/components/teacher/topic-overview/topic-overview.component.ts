/**
 * Created by Max on 10.06.2017.
 */

import {Component, OnInit} from "@angular/core";
import {Topic} from "../../../domain/topic";
import {TeacherService} from "../teacher.service";

@Component({
  moduleId: module.id,
  templateUrl: './topic-overview.component.html',
  styleUrls: ['./topic-overview.component.css']
})

export class TopicOverviewComponent implements OnInit {
  private teacherService: TeacherService;

  topics: Topic[];

  constructor(teacherService: TeacherService) {
    this.teacherService = teacherService;
  }

  ngOnInit(): void {
    this.teacherService.getTopic()
      .subscribe(topics =>{console.log(topics); this.topics = topics})
  }


}
