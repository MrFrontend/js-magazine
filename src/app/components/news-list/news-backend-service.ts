import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { NewsResponse } from '../../model/news-response.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NewsBackendService {
  private latestNewsUrl = 'stub/latest-news.json';

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  public getLatestNews(): Observable<NewsResponse> {
    return this.http
      .get<NewsResponse>(this.latestNewsUrl)
      .pipe(
        catchError(
          this.handleError(
            // In the case of an error return an empty response object with a success: false flag.
            // TODO: better job of transforming error for user consumption
            <NewsResponse>{ success: false, newsList: []}
          )
        )
      );
  }
}
