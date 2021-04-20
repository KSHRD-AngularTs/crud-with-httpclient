import {ARTICLES_ROUTES} from './articles/articles.routes';
import {AppRoutesNames} from './app.routes.names';

export const APP_ROUTES = [
  {path: '', pathMatch: 'full', redirectTo: AppRoutesNames.ARTICLES},
  {path: AppRoutesNames.ARTICLES, children: ARTICLES_ROUTES}
];
