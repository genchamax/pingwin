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
    //FIXME
    return this.getArticleStubPage(pageNumber)
      .then(response => response as Article[])
      .catch();
  }


  private getArticleStubPage(pageNumber: number): Promise<Article[]> {
    return Promise.resolve([
      {
        id: 1,
        title: "Jervis",
        text: "<p><img alt='' src='https://cdn.meme.am/cache/instances/folder728/47403728.jpg' style='height:960px; width:1280px' />The Tour of Heroes app covers the core fundamentals of Angular. You&#39;ll build a basic app that has many of the features you&#39;d expect to find in a full-blown, data-driven app: acquiring and displaying a list of heroes, editing a selected hero&#39;s detail, and navigating among different views of heroic data.</p> <p>You&#39;ll use built-in directives to show and hide elements and display lists of hero data. You&#39;ll create components to display hero details and show an array of heroes. You&#39;ll use one-way data binding for read-only data. You&#39;ll add editable fields to update a model with two-way data binding. You&#39;ll bind component methods to user events, like keystrokes and clicks. You&#39;ll enable users to select a hero from a master list and edit that hero in the details view. You&#39;ll format data with pipes. You&#39;ll create a shared service to assemble the heroes. And you&#39;ll use routing to navigate among different views and their components.</p>.",
        authorId: 1,
        publishDate: "27.05.2017 18:44"
      },
      {
        id: 2,
        title: "Another article",
        text: "<p>Instead of copying and pasting the same code over and over, you&#39;ll create a single reusable data service and inject it into the components that need it. Using a separate service keeps components lean and focused on supporting the view, and makes it easy to unit-test components with a mock service.</p> <p>Because data services are invariably asynchronous, you&#39;ll finish the page with a&nbsp;<em>Promise</em>-based version of the data service.</p><p><img alt='' src='https://pbs.twimg.com/profile_images/818274388340572161/9UYXSzgP.jpg' style='height:512px; width:512px' /></p>",
        authorId: 1,
        publishDate: "27.05.2017 18:35"
      }
    ])
  }
}
