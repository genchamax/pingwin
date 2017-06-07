/**
 * Created by LWells on 04.05.2017.
 */
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './components/auth/auth.component';
import {AuthGuard} from "./components/auth/auth.guard";
import {StudentComponent} from "./components/student/student.component";
import {BlogComponent} from "./components/blog/blog.component";
import {CreateArticleComponent} from "./components/blog/article/create-article.component";

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'student', component: StudentComponent,
  },
  {path: 'blog', component: BlogComponent},
  //FIXME Change into blog/article/:articleId
  {path: 'blog/article/1', component: CreateArticleComponent},
  {path: 'blog/create', component: CreateArticleComponent},
  {path: '**', redirectTo: 'student'}
];

export const routing = RouterModule.forRoot(appRoutes);
