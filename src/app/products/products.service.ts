import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
  }

}
