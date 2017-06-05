/**
 * Created by LWells on 5/30/2017.
 */
import {Component, OnInit} from '@angular/core';
import {SelectItem} from "primeng/primeng";
import {Car} from "../../../domain/car";
import {CarService} from "./student-dictionary.service";

@Component({
  moduleId: module.id,
  templateUrl: './student-dictionary.component.html',
  styleUrls: ['./student-dictionary.component.css']
})

export class StudentDictionaryComponent implements OnInit {
  cars: Car[] = [];

  brands: SelectItem[];

  colors: SelectItem[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars = cars);
  }
}

