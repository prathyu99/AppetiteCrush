import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArticleData } from './data/article-data';

@Injectable({
  providedIn: 'root'
})
export class ArticleOperationService {

  constructor(private hc: HttpClient) { }
  addArticle(dataObj): Observable<any> {
    return this.hc.post('/article/add', dataObj);
  }
  removeAticle() {

  }
  getArticleDataList() {
    const parent = this;
    return new Promise(function (fulfilled, rejected) {
      parent.hc.get('/article/get').subscribe(data => {
        fulfilled(data);
      },
        error => {
          rejected(error);
        });
    });
  }
}