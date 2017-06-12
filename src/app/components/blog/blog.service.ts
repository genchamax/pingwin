/**
 * Created by Max on 25.05.2017.
 */

import {Injectable} from "@angular/core";
import {Article} from "../../domain/article/article";
import {ArticlePreview} from "../../domain/article/article-preview";

const htmlMimeType = "text/html";

const paragraphTag = "p";
const imageTag = "img";

const styleAttribute = "style";

@Injectable()
export class BlogService {

  private domParser = new DOMParser();

  constructor() {
  }

  public getArticlesPage(pageNumber: number): Promise<Article[]> {
    //FIXME
    return this.getArticleStubPage(pageNumber)
      .then(response => response as Article[])
      .catch();
  }

  public toArticlePreview(article: Article): ArticlePreview {
    let articlePreview = new ArticlePreview();

    articlePreview.articleId = article.id;
    articlePreview.articleTitle = article.title;

    articlePreview.previewParagraph = this.getElementTextValue(this.getPreviewParagraphElement(
      this.toDocumentModel(article.text)));
    articlePreview.previewImage = this.getElementTextValue(
      this.getPreviewImageElementWithoutStyleAttribute(this.getPreviewImageElement(this.toDocumentModel(article.text))));

    return articlePreview;
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

  private toDocumentModel(stringHtml: string): Document {
    return this.domParser.parseFromString(stringHtml, htmlMimeType);
  }

  private getPreviewParagraphElement(document: Document): HTMLElement {
    let previewParagraph: HTMLElement = document.getElementsByTagName(paragraphTag).item(0);
    let previewParagraphImages = previewParagraph.getElementsByTagName(imageTag);

    // TODO Change it on foreach later (On for ... in element cast to string)
    for (let i = 0; i < previewParagraphImages.length; i++) {
      previewParagraph.removeChild(previewParagraphImages.item(i));
    }

    return previewParagraph;
  }

  private getPreviewImageElement(document: Document): HTMLElement {
    console.log(document);
    return document.getElementsByTagName(imageTag).item(0);
  }

  private getPreviewImageElementWithoutStyleAttribute(imageElement: HTMLElement): HTMLElement {
    imageElement.removeAttribute(styleAttribute);
    return imageElement;
  }

  private getElementTextValue(element: HTMLElement): string {
    return element.outerHTML;
  }
}
