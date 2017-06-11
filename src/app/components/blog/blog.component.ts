/**
 * Created by Max on 25.05.2017.
 */

import {Component, OnInit} from "@angular/core";
import {Article} from "../../domain/article/article";
import {BlogService} from "./blog.service";


@Component({
  moduleId: module.id,
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})

export class BlogComponent implements OnInit {
  blogService: BlogService;

  articles: Article[];
  currentArticle: Article;

  constructor(blogService: BlogService) {
    this.blogService = blogService;
  }

  ngOnInit(): void {
    this.blogService.getArticlesPage(0).then(response => this.articles = response);
  }
}
