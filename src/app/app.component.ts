import { Component } from '@angular/core';

import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Oubox', 'https://outbox.co.ug/', 0),
      new Article('Innovation Village', 'http://inoovationvillage.com', 0),
      new Article('Design Hub', 'http://designhubkampala.com/', 0),
      new Article('WITU hub', 'https://witug.org/', 0),
      new Article('Mawazo hub', 'http://nftmawazo.com/', 0),
      new Article('Structures Hub', 'http://www.structureshub.com/', 0),
      new Article('Hive Collab', 'http://hivecolab.org/', 0)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
