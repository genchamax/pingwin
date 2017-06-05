/**
 * Created by LWells on 04.06.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../../../domain/car';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CarService {

  constructor(private http: Http) {}

  getCarsSmall() {
    return this.http.get('../../../../assets/data/cars-small.json')
      .map((res:Response) => res.json().data as Car[])
  }

  getCarsMedium(): Promise<Car[]> {
    return this.http
      .get('/assets/data/cars-medium.json')
      .toPromise()
      .then(res => res.json().data as Car[]);
}

/*  getCarsLarge() {
    return this.http.get('../../../../assets/data/cars-large.json')
      .toPromise()
      .then(res => <Car[]> res.json().data)
      .then(data =>  return data as Car[]);
  }*/
}
