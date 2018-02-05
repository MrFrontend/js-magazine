import { Injectable } from '@angular/core';
import { News } from '../../model/news.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { NewsBackendService } from './news-backend-service';

interface NewsDataStore {
  newsList: News[];
}

@Injectable()
export class NewsStore {

  constructor(private newsBackendService: NewsBackendService) { }

  private dataStore: NewsDataStore = {
    newsList: []
  };
  private storeLoaded = false;

  private newsSubject: BehaviorSubject<News[]> = new BehaviorSubject([]);

  /**
   * Public interface.
   */
  public readonly news: Observable<News[]> = this.newsSubject.asObservable();

  public loadNews(): void {
    if (this.storeLoaded === false) {
      this.newsBackendService
        .getLatestNews()
        .subscribe(
          (newsResponse) => {
            this.dataStore.newsList = newsResponse.newsList
              .map(
                (currentNews) => new News(currentNews)
              );

            this.storeLoaded = newsResponse.success;

            // Emit the changes
            this.newsSubject.next(Object.assign({}, this.dataStore).newsList);
          }
        );
    }
  }

  public getNewsById(id: number): News {
    return this.dataStore.newsList.filter(
      (news: News) => news.id === id
    )[0];

  }
}
