import {ArticlesRoutesNames} from './articles.routes.names';
import {ArticlesComponent} from './articles.component';
import {ShowComponent} from './show/show.component';
import {CreateComponent} from './create/create.component';

export const ARTICLES_ROUTES = [
  {path: ArticlesRoutesNames.INDEX, component: ArticlesComponent},
  {path: ArticlesRoutesNames.CREATE, component: CreateComponent},
  {path: ArticlesRoutesNames.SHOW, component: ShowComponent}
];
