import {Lesson} from "./lesson";
/**
 * Created by Max on 10.06.2017.
 */
export class Topic {
  id: number;
  name: string;
  order: number;
  lessons: Lesson[];
}
