import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // ✅ Real, public API for demonstration
  private baseUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  /** ===============================
   *  Generic HTTP Methods
   *  =============================== */

  getAll<T>(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${endpoint}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getById<T>(endpoint: string, id: number | string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}/${id}`)
      .pipe(catchError(this.handleError));
  }

  create<T>(endpoint: string, data: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data)
      .pipe(catchError(this.handleError));
  }

  update<T>(endpoint: string, id: number | string, data: Partial<T>): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}/${id}`, data)
      .pipe(catchError(this.handleError));
  }

  delete(endpoint: string, id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${endpoint}/${id}`)
      .pipe(catchError(this.handleError));
  }

  /** ===============================
   *  Example: Specific API Calls
   *  =============================== */

  getProducts(): Observable<any[]> {
    return this.getAll<any>('products');
  }

  getUsers(): Observable<any[]> {
    return this.getAll<any>('users');
  }

  /** ===============================
   *  Error Handling
   *  =============================== */

  private handleError(error: HttpErrorResponse) {
    let errorMsg = '';

    if (error.error instanceof ErrorEvent) {
      errorMsg = `Client Error: ${error.error.message}`;
    } else {
      errorMsg = `Server Error: ${error.status} - ${error.message}`;
    }

    console.error('DataService Error:', errorMsg);
    return throwError(() => new Error(errorMsg));
  }
}
