import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

import {config} from '@app/core/smartadmin.config';
import {Observable,throwError} from "rxjs";
import { delay, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  login_token = '';
  constructor(private http: HttpClient) {
    if (localStorage.getItem("logged") === "yes") {
      this.login_token= localStorage.getItem('login_token');
    }
  }
  private formatErrors(error: any) {
    if (error.status === 401) {
      // navigate /delete cookies or whatever
      console.log('handled error ' + error.status);
      // this.router.navigate(['/login']);
      localStorage.removeItem('logged');
      localStorage.removeItem('user');
      localStorage.removeItem('login_token');
      document.location.reload();
      // this.router.navigate(['/']);
      // return false;
      // if you've caught / handled the error, you don't want to rethrow it 
      // unless you also want downstream consumers to have to handle it as well.

    }
    return throwError(error.error);
  }
  get(path: string): Observable<any> {
    if (this.login_token != '') {
      const headers = new HttpHeaders({ 'authorization': 'Token ' + this.login_token });

      return this.http.get(`${config.frontend_api_url}${path}`, { headers: headers })
        .pipe(catchError(this.formatErrors));
    } else {
      return this.http.get(`${config.frontend_api_url}${path}`)
        .pipe(catchError(this.formatErrors));
    }

  }
  post(path: string, body: Object = {}): Observable<any> {
    if (this.login_token != '') {
      const headers = new HttpHeaders({
        'authorization': 'Token ' + this.login_token,
        'Content-Type': 'application/json; charset=utf-8'
      });

      return this.http.post(
        `${config.frontend_api_url}${path}`,
        JSON.stringify(body),
        { headers: headers }
      ).pipe(catchError(this.formatErrors));
    } else {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
      return this.http.post(
        `${config.frontend_api_url}${path}`,
        JSON.stringify(body),
        { headers: headers }
      ).pipe(catchError(this.formatErrors));
    }
  }
  delete(path: string): Observable<any> {
    if (this.login_token != '') {
      const headers = new HttpHeaders({ 'authorization': 'Token ' + this.login_token });

      return this.http.delete(`${config.frontend_api_url}${path}`, { headers: headers })
        .pipe(catchError(this.formatErrors));
    } else {
      return this.http.delete(`${config.frontend_api_url}${path}`)
        .pipe(catchError(this.formatErrors));
    }

  }
  put(path: string, body: Object = {}): Observable<any> {
    if (this.login_token != '') {
      const headers = new HttpHeaders({
        'authorization': 'Token ' + this.login_token,
        'Content-Type': 'application/json; charset=utf-8'
      });

      return this.http.put(
        `${config.frontend_api_url}${path}`,
        JSON.stringify(body),
        { headers: headers }
      ).pipe(catchError(this.formatErrors));
    } else {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
      return this.http.put(
        `${config.frontend_api_url}${path}`,
        JSON.stringify(body),
        { headers: headers }
      ).pipe(catchError(this.formatErrors));
    }
  }

}
