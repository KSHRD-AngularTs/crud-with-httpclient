import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  id = '';
  article: Article;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.articleService.getArticleById(this.id)
      .subscribe(response => {
        this.article = response.data;
      });
  }

}
