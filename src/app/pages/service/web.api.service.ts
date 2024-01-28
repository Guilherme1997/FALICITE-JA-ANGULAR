import { Injectable,Injector } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";

import { map, catchError } from "rxjs/operators";
import { Entry } from '../entries/shared/entry.model';
import { BaseResourceService } from "../../shared/componentes/service/base-resource.service";



@Injectable({
  providedIn: 'root'
})
export class WebApiService   extends BaseResourceService<Entry> {

  headers: HttpHeaders;

  router: string;



    constructor(protected injector: Injector) { 
    super("api/entries", injector, Entry.fromJson);
  }

  private url: string = "api";

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url + this.getRouter(), { headers: this.headers }).pipe(
      catchError(this.handlerError),
      map(this.jsonData),
    );
  }

  private getRouter(): string {
    return window.location.pathname;
  }

  getById(id: number): Observable<any> {
    const url = `${this.url} ${this.getRouter()}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handlerError),
      map(this.jsonDataObject)
    )
  }

  create(category: any): Observable<any> {
    console.log(this.getRouter())
    return this.http.post(this.url + "/" + this.getRouter().split("/")[1], category).pipe(
      catchError(this.handlerError),
      map(this.jsonDataObject)
    );
  }

  update(category: any): Observable<any> {
    const url = `${this.url} ${this.getRouter().split("/")[0]}/${category.id}`;
    return this.http.put(url, category).pipe(
      catchError(this.handlerError),
      map(() => category)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.url} ${this.getRouter()}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handlerError),
      map(() => null)
    );
  }

  private jsonData(jsonData: any[]): any[] {
    const object: any[] = [];

    let path = window.location.pathname;
    
    if (path == "/entries") {
      jsonData.forEach(element => object.push(Object.assign(new Entry(), element)));
    }
    else {
      jsonData.forEach(element => object.push(element));
    }
    return object;
  }

  private jsonDataObject(jsonData: any): any {
    return jsonData as any;
  }

  private handlerError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇAO -> ", error);
    return throwError(error);
  }

}

