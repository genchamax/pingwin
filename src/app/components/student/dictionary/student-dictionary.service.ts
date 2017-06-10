/**
 * Created by LWells on 04.06.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Car} from '../../../domain/car';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CarService {

  constructor(private http: Http) {
  }

  /*  getCarsMedium(): Promise<Car[]> {
   console.log("call1");
   return this.http.get('assets/data/cars-medium.json')
   .map(res => res.json())
   .toPromise()
   .then(res => {
   console.log("sucess1" + res);
   console.log("sucess2" + res.json());
   return res.data as Car[]
   })
   .then(
   res => {
   return res.json().data as Car[];
   }
   ,
   msg => { // Error
   console.error(msg);
   }
   )
   .catch(error => {
   console.log("error");
   console.error(error);
   });
   }*/

  getCarsMedium(): Observable<Car[]> {
    console.log("call1");
    return this.http
      .get('/assets/data/cars-medium.json')
      .map((res: Response) => {
          console.log("wow");
          console.log(res);
          console.log(res.json());
          console.log(res.json().data);
          return res.json().data as Car[];
        }
        ,
        msg => { // Error
          console.error(msg);
        });
  }

/*  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get('/api/users', options)
      .map((response: Response) => response.json());
  }*/
}
