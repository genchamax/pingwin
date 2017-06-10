/**
 * Created by LWells on 5/30/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Car} from "../../../domain/car";
import {CarService} from "./student-dictionary.service";

@Component({
  moduleId: module.id,
  templateUrl: './student-dictionary.component.html',
  styleUrls: ['./student-dictionary.component.css']
})

export class StudentDictionaryComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getCarsMedium().subscribe(cars => {
      console.log(cars);
      this.cars = cars
    });
    console.log("call2");
    /*    this.carService.getCarsMedium().then(function (cars) {
     cars => this.cars = cars;
     console.log(cars)
     });*/
  }
}

