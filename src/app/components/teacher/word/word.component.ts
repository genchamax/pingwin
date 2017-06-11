/**
 * Created by Max on 10.06.2017.
 */

import {Component, Input} from "@angular/core";
import {Word} from "../../../domain/word";

@Component({
  moduleId: module.id,
  selector: 'pingwin-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {
  @Input() word: Word;
}
