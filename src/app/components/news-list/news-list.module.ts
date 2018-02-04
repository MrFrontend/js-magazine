import { NgModule } from '@angular/core';
import { NewsListComponent } from './news-list.component';
import { NewsComponent } from './news/news.component';
import { NewsBackendService } from './news-backend-service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NewsStore } from './news-store';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    NewsComponent,
    NewsListComponent,
  ],
  exports: [
    NewsListComponent,
    NewsComponent,
  ],
  providers: [
    NewsBackendService,
    NewsStore
  ]
})
export class NewsListModule { }
