import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from "../Interface/usuario";
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    private urlLara = "http://127.0.0.1:8000/api/usuario/"
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
   }
  constructor(private httpClient: HttpClient) { }

  crear(usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.urlLara, JSON.stringify(usuario), this.httpOptions)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
