/**
 * Created by Max on 25.05.2017.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Article} from "../../models/article";

@Injectable()
export class BlogService {
  constructor(private http: Http) {
  }

  public getArticlesPage(pageNumber: number): Promise<Article[]> {
    return this.getArticleStubPage(pageNumber);
  }


  private getArticleStubPage(pageNumber: number): Promise<Article[]> {
    return Promise.resolve([
      {
        id: 1,
        title: "Power of penguin",
        text: "Bespectacled girls rocking out the espy, world's most liveable city footy the bulldogs rooftop bars running the tan, etihad stadium chaddie hu tong dumplings graffiti lions bar, burlesque footscray hobos vic market melb north of the river, collins place ac/dc moomba.",
        authorId: 1,
        publishDate: "27.05.2017 18:44",
        imageUrl: ""
      },
      {
        id: 2,
        title: "Power of penguin",
        text: "Bespectacled girls rocking out the espy, world's most liveable city footy the bulldogs rooftop bars running the tan, etihad stadium chaddie hu tong dumplings graffiti lions bar, burlesque footscray hobos vic market melb north of the river, collins place ac/dc moomba.",
        authorId: 1,
        publishDate: "27.05.2017 18:44",
        imageUrl: ""
      },
      {
        id: 3,
        title: "Power of penguin",
        text: "Bespectacled girls rocking out the espy, world's most liveable city footy the bulldogs rooftop bars running the tan, etihad stadium chaddie hu tong dumplings graffiti lions bar, burlesque footscray hobos vic market melb north of the river, collins place ac/dc moomba.",
        authorId: 1,
        publishDate: "27.05.2017 18:44",
        imageUrl: ""
      },
      {
        id: 4,
        title: "Power of penguin",
        text: "Bespectacled girls rocking out the espy, world's most liveable city footy the bulldogs rooftop bars running the tan, etihad stadium chaddie hu tong dumplings graffiti lions bar, burlesque footscray hobos vic market melb north of the river, collins place ac/dc moomba.",
        authorId: 1,
        publishDate: "27.05.2017 18:44",
        imageUrl: ""
      },
      {
        id: 5,
        title: "Power of penguin",
        text: "Bespectacled girls rocking out the espy, world's most liveable city footy the bulldogs rooftop bars running the tan, etihad stadium chaddie hu tong dumplings graffiti lions bar, burlesque footscray hobos vic market melb north of the river, collins place ac/dc moomba.",
        authorId: 1,
        publishDate: "27.05.2017 18:44",
        imageUrl: ""
      }
    ])
  }
}
