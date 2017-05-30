/**
 * Created by Max on 25.05.2017.
 */
export class Article {
  id: number;
  title: string;
  text: string;
  authorId: number;
  // TODO: Leave only one type
  publishDate: Date | number | string;
  imageUrl: string;
}
