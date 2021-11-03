import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/config.json';

  constructor(private httpClient: HttpClient) { }

  public get(url: string, params:Object): Observable<any>{
    return this.httpClient.get(url, params);
}

}
