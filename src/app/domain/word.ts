/**
 * Created by Max on 10.06.2017.
 */
import {Media} from "./media";
import {User} from "./user";

export class Word {
  id: number;
  name: string;
  media: Media;
  picture: Media;
  author: User;
}
