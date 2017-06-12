/**
 * Created by LWells on 13.06.2017.
 */
import {Component, Input} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Word} from "../../domain/word";

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: 'carousel-config.html',
  styleUrls: ['./carousel-config.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselConfig {
  @Input()
  words: Word[];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }
}
