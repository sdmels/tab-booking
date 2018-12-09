import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable, of, EMPTY } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';
import { Book } from 'src/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private bookUrl = `${environment.endPoint}/books`;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>( this.bookUrl );
  }

  addBook( book: Book ): Observable<any> {
    return this.http.post( this.bookUrl, book ).pipe(
      map( ( book ) => {
        console.log( 'book after adding', book );
        return book;
      } )
    );
  }
}
