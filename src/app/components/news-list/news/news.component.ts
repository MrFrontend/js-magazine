import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { News } from '../../../model/news.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NewsStore } from '../news-store';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public news: News;

  constructor(private route: ActivatedRoute, private newsStore: NewsStore) {
    this.newsStore.loadNews();

    this.newsStore.news.subscribe((news: News[]) => {
      // if (news.length > 0) {}
      this.subscriptions.push(
        this.route.params.subscribe(
          routeParameters => {
            if (routeParameters
              && routeParameters.id) {
              const newsId = parseInt(routeParameters.id, 10);
              this.news = this.newsStore.getNewsById(newsId);
            }
          })
      );
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.map(
      subscription => subscription.unsubscribe()
    );
  }

}
