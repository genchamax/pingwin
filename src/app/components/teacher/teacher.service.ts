/**
 * Created by Max on 10.06.2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Topic} from "../../domain/topic";
import {Lesson} from "../../domain/lesson";

@Injectable()
export class TeacherService {

  private http: Http;


  constructor(http: Http) {
    this.http = http;
  }

  public getTopic() : Observable<Topic[]> {
    const requestUrl = "/assets/data/teacher/topics.json";
    return this.http.get(requestUrl)
      .map(response => response.json().topics as Topic[])
  }
}
