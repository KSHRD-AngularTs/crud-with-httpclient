import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../models/article.model';
import {ArticleResponse} from '../models/articleResponse.model';
import {map} from 'rxjs/operators';
import {A} from '@angular/cdk/keycodes';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private API_BASE_URL = 'http://110.74.194.124:3000/api';

  constructor(private httpClient: HttpClient) {
  }

  public getAllArticles(page: number, limit: number): Observable<ArticleResponse<Article[]>> {
    return this.httpClient.get<ArticleResponse<Article[]>>(this.API_BASE_URL + `/articles?page=${page}&size=${limit}`)
      .pipe(
        map(response => {
          return new ArticleResponse<Article[]>(response);
        })
      );
  }

  public getArticleById(id: string): Observable<ArticleResponse<Article>> {
    return this.httpClient.get<ArticleResponse<Article>>(this.API_BASE_URL + `/articles/${id}`)
      .pipe(
        map(response => {
          return new ArticleResponse<Article>(response);
        })
      );
  }

  public deleteArticle(id: string): Observable<ArticleResponse<Article>> {
    return this.httpClient.delete(this.API_BASE_URL + `/articles/${id}`)
      .pipe(
        map(response => {
          return new ArticleResponse<Article>(response);
        })
      );
  }
}
