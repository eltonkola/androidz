import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SnippetQuick } from './snippet.quick';
import { SnippetFull } from './snippet.full';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://raw.githubusercontent.com/eltonkola/androidz/prod/api/quick.json';
  apiDetails = 'https://raw.githubusercontent.com/eltonkola/androidz/master/snippets';

  constructor(private http: HttpClient) { }

  getSnippets (): Observable<SnippetQuick[]> {
    return this.http.get<SnippetQuick[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError<SnippetQuick[]>([]))
    );
  }

  getSnippet(name: string): Observable<SnippetFull> {
    const url = `${this.apiDetails}/${name}`;
    return this.http.get<SnippetFull>(url).pipe(
      
    );
  }


  private handleError<T> ( result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
