/**
 * Created by Max on 29.05.2017.
 */
import {Component} from "@angular/core";
import {Article} from "../../../domain/article/article";

@Component({
  moduleId: module.id,
  templateUrl: "./create-article.component.html",
  styleUrls: ["./create-article.component.css"]
})

//TODO Change component name to ArticleComponent
export class CreateArticleComponent {
  article: Article = new Article;

}
