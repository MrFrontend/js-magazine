import { Component, OnInit } from '@angular/core';
import { NewsStore } from './news-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(public newsStore: NewsStore,
              private router: Router) { }

  ngOnInit() {
    this.newsStore.loadNews();
  }

  /**
   * Open the clicked news specified by id.
   *
   * @param {number} id
   */
  public openNews (id: number) {
    this.router.navigate([`/${id}`]);
  }
}
