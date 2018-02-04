import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { NewsListModule } from './components/news-list/news-list.module';
import { RoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RoutingModule,
    NewsListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
