import { News } from './news.model';

export interface NewsResponse {
  success: boolean;
  newsList: News[];
}
