/**
 * Created by Max on 29.05.2017.
 */
import {Component, OnInit} from "@angular/core";
import {Article} from "../../../domain/article/article";

@Component({
  moduleId: module.id,
  templateUrl: "./create-article.component.html",
  styleUrls: ["./create-article.component.css"]
})

//TODO Change component name to ArticleComponent
export class CreateArticleComponent implements OnInit {
  article: Article = new Article;
  articleId: number;


  ngOnInit(): void {

  }

  public isViewMode(): boolean {
    return !!~window.location.href.indexOf("/article/1");
  }
}
