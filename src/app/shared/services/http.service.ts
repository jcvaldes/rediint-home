import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError  } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // tslint:disable-next-line: variable-name
  constructor(public http: HttpClient) { }
  get<T>(url): Observable<any> {
    return this.http.get(url).pipe(
      catchError(err => observableThrowError(err))
    );
  }
  getSingle<T>(url, id: any) {
    return this.http.get<T>(
      `${url}/${id}`
    ).pipe(
      catchError(err => observableThrowError(err))
    );
  }
  findCriteria<T>(url, criteria) {
    const keys = Object.keys(criteria);
    let params = new HttpParams();
    for(let i = 0; i < keys.length; i++ ) {
      params = params.set(keys[i], Object.values(criteria)[i].toString());
    }
    let options = {params};

    return this.http.get<T>(
      `${url}`,
      options
    ).pipe(
      catchError(err => observableThrowError(err))
    );
  }

  post<T>(url, payload): Observable<any> {
    return this.http.post(url, payload).pipe(
      catchError(err => observableThrowError(err))
    );;
  }
  put<T>(url, payload: T): Observable<any> {
    return this.http.put<T>(url, payload).pipe(
      catchError(err => observableThrowError(err))
    );;
  }
  delete(url): Observable<any> {
    return this.http.delete(url).pipe(
      catchError(err => observableThrowError(err))
    );
  }
}
