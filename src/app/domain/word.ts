/**
 * Created by Max on 10.06.2017.
 */
import {Media} from "./media";
import {User} from "./user";
import {WordState} from "./word_state";

export class Word {
  id: number;
  name: string;
  media: Media;
  picture: Media;
  author: User;
  wordState: WordState;
}
