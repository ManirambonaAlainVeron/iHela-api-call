import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { I_Auth2 } from '../models/I_Auth2';
import { I_Authentification } from '../models/I_Authification';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post_request(url:string, data: any, option ?: any):Observable<any>{
    return this.http.post(url, data, option)
    .pipe(
      catchError(this.handleError)
    );
  }

  
  get_request(url:string):Observable<any>{
    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
