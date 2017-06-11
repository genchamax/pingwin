/**
 * Created by Max on 10.06.2017.
 */

import {Component, Input} from "@angular/core";
import {Topic} from "../../../domain/topic";
@Component({
  moduleId: module.id,
  selector: 'pingwin-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent {
  @Input() topic: Topic;
}
