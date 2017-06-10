/**
 * Created by Max on 04.06.2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Article} from "../../../domain/article/article";
import {BlogService} from "../blog.service";
import {ArticlePreview} from "../../../domain/article/article-preview";

@Component({
  moduleId: module.id,
  selector: "article-preview",
  templateUrl: "./article-preview.component.html",
  styleUrls: ["./article-preview.component.css"]
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: Article;

  private blogService: BlogService;
  private articlePreview: ArticlePreview;

  constructor(blogService: BlogService) {
    this.blogService = blogService;
  }

  ngOnInit(): void {
    this.articlePreview = this.blogService.toArticlePreview(this.article);
  }
}