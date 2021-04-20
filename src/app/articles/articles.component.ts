import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Article} from '../models/article.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];
  page = 1;
  limit = 10;
  totalPage = 1;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.getAllArticles(this.page);
  }

  paginate($event: any): void {
    this.page = $event.page + 1;
    this.limit = $event.rows || 10;
    this.getAllArticles(this.page);
  }

  getAllArticles(page: number): void {
    this.articleService.getAllArticles(page, this.limit)
      .subscribe((response) => {
        this.articles = response.data;
        this.page = response.page;
        this.limit = response.limit;
        this.totalPage = response.totalPage;
        console.log(this.articles);
      });
  }

  get totalRecords(): number {
    return this.limit * this.totalPage;
  }

  get first(): number {
    return (this.page - 1) * this.limit + 1;
  }

  get last(): number {
    return this.page + this.limit - 1;
  }

  onDelete(id: string): void {
    if (id && confirm('Are you sure?')) {
      this.articleService.deleteArticle(id)
        .subscribe(response => {
          this.articles = this.articles.filter((article) => {
            return article._id !== response.data._id;
          });
        });
    }
  }
}
