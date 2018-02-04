import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { NewsListModule } from '../news-list.module';
import { APP_BASE_HREF } from '@angular/common';
import { RoutingModule } from '../../../app.routing';
import { NewsListComponent } from '../news-list.component';
import { NewsStore } from '../news-store';
import { NewsBackendService } from '../news-backend-service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewsComponent,
        NewsListComponent
      ],
      imports: [
        HttpClientModule,
        RoutingModule,
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
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
