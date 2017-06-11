/**
 * Created by LWells on 04.06.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Car} from '../../../domain/car';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Topic} from "../../../domain/topic";

@Injectable()
export class CarService {

  constructor(private http: Http) {
  }

  getCarsMedium(): Observable<Car[]> {
    console.log("call1");
    return this.http
      .get('/assets/data/teacher/topics.json')
      .map((res: Response) => {
          console.log(res.json().data);
          return res.json().topics as Topic[];
        }
        ,
        msg => { // Error
          console.error(msg);
        });
  }
}
