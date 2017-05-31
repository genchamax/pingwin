/**
 * Created by Max on 29.05.2017.
 */
import {Component, OnInit} from "@angular/core";
import {Article} from "../../../models/article";

@Component({
  moduleId: module.id,
  templateUrl: "./create-article.component.html",
  styleUrls: ["./create-article.component.css"]
})

export class CreateArticleComponent implements OnInit {
  article: Article = new Article;

  ngOnInit(): void {
    //FIXME: Write code here
  }
}
