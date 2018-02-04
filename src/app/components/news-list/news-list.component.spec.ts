import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NewsBackendService } from './news-backend-service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewsStore } from './news-store';
import { APP_BASE_HREF } from '@angular/common';
import { RoutingModule } from '../../app.routing';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule,
        RoutingModule,
      ],
      declarations: [
        NewsComponent,
        NewsListComponent,
      ],
      providers: [
        NewsBackendService,
        NewsStore,
        { provide: APP_BASE_HREF, useValue : '/' },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
