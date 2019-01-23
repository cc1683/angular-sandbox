import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IDepartment } from './department';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators'﻿

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private _url: string = "/assets/data/departments.json";

  constructor(private http: HttpClient) { }

  getDepartment(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error")
  }
}

