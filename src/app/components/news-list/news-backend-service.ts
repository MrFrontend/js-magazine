import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { NewsResponse } from '../../model/news-response.model';

@Injectable()
export class NewsBackendService {
  private latestNewsUrl = 'assets/stub/latest-news.json';

  constructor(private http: HttpClient) { }

  public getLatestNews(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(this.latestNewsUrl);
  }
}
