/**
 * Created by Max on 10.06.2017.
 */

import {User} from "./user";
import {MediaType} from "./media-type";

export class Media {
  id: number;
  sourcePath: string;
  mediaType: MediaType;
  author: User;
}
