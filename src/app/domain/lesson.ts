import {User} from "./user";
import {Media} from "./media";
import {Word} from "./word";
/**
 * Created by Max on 10.06.2017.
 */
export class Lesson {
  id: number;
  name: string;
  order: number;
  author: User;
  picture: Media;
  words: Word[];
  point: number;
}
