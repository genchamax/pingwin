/**
 * Created by Max on 10.06.2017.
 */

import {Component, Input} from "@angular/core";
import {Topic} from "../../../domain/topic";
import {ConfirmationService, Message} from "primeng/primeng";
@Component({
  moduleId: module.id,
  selector: 'pingwin-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [ConfirmationService]
})

export class TopicComponent {
  @Input() topic: Topic;
  private confirmationService: ConfirmationService;
  msgs: Message[] = [];

  constructor(confirmationService: ConfirmationService) {
    this.confirmationService = confirmationService;
  }

  public deleteTopic() {
    this.confirmationService.confirm({
      message: 'Ви бажаєте видалити тему ' + this.topic.name + ' ?',
      header: 'Видалення теми',
      icon: 'fa fa-trash',
      accept: () => {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Видалено', detail: 'Тему ' + this.topic.name + ' видалено'});
      }
    })
  }
}
