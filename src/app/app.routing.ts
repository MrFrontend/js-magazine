import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsComponent } from './components/news-list/news/news.component';
import { ModuleWithProviders } from '@angular/core';

export const appRoutes: Routes = [
  {
    path: '',
    component: NewsListComponent,
  },
  {
    path: ':id',
    component: NewsComponent
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
