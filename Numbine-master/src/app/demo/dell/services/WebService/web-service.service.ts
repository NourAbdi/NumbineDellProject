import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebServiseService {
  

  readonly ROOT_URL ="http://192.168.0.168:8080/";
  config={headers:WebServiseService.httpHeaders};
  static httpHeaders=new HttpHeaders({
    "Content-Type":"aplication/json",
    'Accept': 'application/json'
  });
  constructor(private httpClient: HttpClient) {
  }


  public post<T>(apiRoute: string, data: Map<string,any>): Observable<T> {
    let params =NumbineHttpParamsGenerator.insertParams(data);
    return this.httpClient.post<T>(`${this.ROOT_URL + apiRoute}`,params, this.config).pipe(catchError(this.handleError));
  }

  public get<T>(apiRoute: string, data: Map<string,any>) : Observable<T>{
    let params:HttpParams =NumbineHttpParamsGenerator.insertParams(data);
    let options = { params: params };
    return this.httpClient.get<T>(`${this.ROOT_URL + apiRoute}`,options).pipe(catchError(this.handleError)) ;
  }



  public put<T>(apiRoute: string,  data: Map<string,any>) : Observable<T>{
    let params =NumbineHttpParamsGenerator.insertParams(data);
    return this.httpClient.put<T>(`${this.ROOT_URL + apiRoute}`,data ,this.config).pipe(catchError(this.handleError));
  }

  public delete<T>(apiRoute: string, data: Map<string,any>) : Observable<T>{
    let params:HttpParams =NumbineHttpParamsGenerator.insertParams(data);
    let options = { params: params };

    return this.httpClient.delete<T>(`${this.ROOT_URL + apiRoute}`,options).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError('Something wrong happened');
  }

}

class NumbineHttpParamsGenerator{
  public static insertParams(map:Map<string,any>) : HttpParams{
    const params=new HttpParams();
      for (let [key, value] of map) {
        params.set(key, value);            
    } 
    return params;
  }
} 
