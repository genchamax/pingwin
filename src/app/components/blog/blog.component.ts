/**
 * Created by Max on 25.05.2017.
 */

import {Component, OnInit} from "@angular/core";
import {Article} from "../../models/article";


@Component({
  moduleId: module.id,
  templateUrl: "./blog.component.html"
})

export class BlogComponent implements OnInit {
  articles: Article[];
  currentArticle: Article;

  ngOnInit(): void {
    //  FIXME: Add something here

  }

}
